const gallery = document.getElementById("gallery");
const searchContainer = document.getElementsByClassName("search-container")[0];
const body = document.getElementsByTagName("body")[0];

const apiURL = "https://api.github.com/users?results=12";
let userProfiles = "";

fetchData(apiURL);
createSearch();
function fetchData() {
    fetch(apiURL)
        .then(checkStatus)
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
    data.forEach(user => {
        users += `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${user.avatar_url}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.login}</h3>
            <p class="card-text">${user.type}</p>
            <p class="card-text cap">${user.avatar_url}</p>
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
    const userID = userProfiles[index];
    console.log(userID);
    const img = userID.avatar_url;
    const name = userID.login;
    const email = userID.url;
    const cityState = `${userID.repos_url}`;
    const cell = userID.cell;

    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    body.appendChild(modalContainer);
    modalContainer.innerHTML = `<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn">&#x274c;</button>
    <div class="modal-info-container">
        <img class="modal-img" src="${img}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${name}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${cityState}</p>
        <hr>
        <p class="modal-text">${cell}</p>
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

function createSearch() {
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
}
