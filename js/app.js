const gallery = document.getElementById("gallery");
const searchContainer = document.getElementsByClassName("search-container")[0];
const body = document.getElementsByTagName("body")[0];

const apiURL = "https://randomuser.me/api/?results=12&nat=ca,us,gb,nz,au";
let userProfiles = "";

fetchData(apiURL);
function fetchData() {
    fetch(apiURL)
        .then(checkStatus)
        .then(createSearch)
        .then(response => response.json())
        .then(createProfiles)
        .then(createCards)
        .catch(err => console.log(err));
}

function checkStatus(response) {
    if (response.ok == true) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function createProfiles(data) {
    userProfiles = data;

    console.log(userProfiles);
    return userProfiles;
}

function createCards(data) {
    let users = "";
    data.results.forEach(user => {
        users += `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}</p>
        </div>
    </div>`;
    });
    gallery.innerHTML = users;

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, value) => {
        card.addEventListener("click", function() {
            console.log("Index of the current card is: ", value);
            showModal(value);
        });
    });
}

function showModal(index) {
    const userID = userProfiles.results[index];
    console.log(userID);
    const img = userID.picture.medium;
    const name = `${userID.name.first} ${userID.name.last}`;
    const email = userID.email;
    const cityState = `${userID.location.city}, ${userID.location.State}`;
    const cell = userID.cell;
    const address = `${userID.location.street.number} ${userID.location.street.name}, ${userID.location.city}
                    ${userID.location.state}, ${userID.location.country} ${userID.location.postcode}`;
    const rawDOB = new Date(userID.dob.date);
    const dob = rawDOB.toLocaleDateString();

    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    body.appendChild(modalContainer);
    modalContainer.innerHTML = `<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${img}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${name}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${cityState}</p>
        <hr>
        <p class="modal-text">${cell}</p>
        <p class="modal-text">${address}</p>
        <p class="modal-text">Birthday: ${dob}</p>
    </div>
</div>

// IMPORTANT: Below is only for exceeds tasks 
<div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
</div>`;

    const modalClose = document.getElementById("modal-close-btn");
    modalClose.addEventListener("click", e => {
        if (e.target.id == "modal-close-btn") {
            modalContainer.style.display = "none";
            modalContainer.innerHTML = "";
        }
    });
    window.addEventListener("click", e => {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
            modalContainer.innerHTML = "";
        }
    });
    const prevBtn = document.getElementById("modal-prev");
    const nextBtn = document.getElementById("modal-next");
    const cards = document.querySelectorAll(".card");

    prevBtn.addEventListener("click", e => {
        if (e.target.id == "modal-prev") {
            if (cards[index].previousElementSibling) {
                modalContainer.style.display = "none";
                modalContainer.innerHTML = "";
                showModal(index - 1);
            } else if (!cards[index].previousElementSibling) {
                prevBtn.disabled = true;
            }
        }
    });

    nextBtn.addEventListener("click", e => {
        if (e.target.id == "modal-next") {
            if (cards[index].nextElementSibling) {
                modalContainer.style.display = "none";
                modalContainer.innerHTML = "";
                showModal(index + 1);
            } else if (!cards[index].previousElementSibling) {
                nextBtn.disabled = true;
            }
        }
    });
}

function createSearch(data) {
    searchContainer.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-submit");

    searchBtn.addEventListener("click", e => {
        e.preventDefault();
        createCards(userProfiles);
        const cards = document.querySelectorAll(".card");
        const text = searchInput.value.toLowerCase();
        const searchResults = [];
        if (text != "" && text.length > 2) {
            cards.forEach(card => {
                const name = card.lastElementChild.firstElementChild.textContent.toLowerCase();
                if (name.includes(text)) {
                    gallery.innerHTML = "";
                    searchResults.push(card);
                }
            });
            searchResults.forEach(search => gallery.append(search));
        } else {
            createCards(userProfiles);
        }
        searchInput.value = "";
    });

    return data;
}
