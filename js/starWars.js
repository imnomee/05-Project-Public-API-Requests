const gallery = document.getElementById("gallery");
const searchContainer = document.getElementsByClassName("search-container")[0];
const body = document.getElementsByTagName("body")[0];

const apiURL = "https://swapi.co/api/people/";
let userProfiles = {};
createSearch();
fetchData(apiURL);

// createCards(userProfiles);

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
    userProfiles = data.results;
    return userProfiles;
}
function createCards(data) {
    let users = "";
    console.log(data);

    data.forEach(user => {
        dataUserName = user.name.first;
        users += `<div class="card">
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name}</h3>
            <p class="card-text">${user.gender}</p>
            <p class="card-text cap">${user.region}</p>
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
    const name = userID.name;
    const email = userID.surname;
    const cityState = `${userID.region}`;

    const modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    body.appendChild(modalContainer);
    modalContainer.innerHTML = `<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <h3 id="name" class="modal-name cap">${name}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${cityState}</p>
        <hr>
    </div>
</div>

// IMPORTANT: Below is only for exceeds tasks 
<div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
</div>`;

    const modalClose = document.getElementById("modal-close-btn");
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalContainer.innerHTML = "";
    });

    const prevBtn = document.getElementById("modal-prev");
    const nextBtn = document.getElementById("modal-next");
    const cards = document.querySelectorAll(".card");

    prevBtn.addEventListener("click", e => {
        if (cards[index].previousElementSibling) {
            modalContainer.style.display = "none";
            modalContainer.innerHTML = "";
            showModal(index - 1);
        } else if (!cards[index].previousElementSibling) {
            prevBtn.disabled = true;
        }
    });

    nextBtn.addEventListener("click", e => {
        if (cards[index].nextElementSibling) {
            modalContainer.style.display = "none";
            modalContainer.innerHTML = "";
            showModal(index + 1);
        } else if (!cards[index].previousElementSibling) {
            nextBtn.disabled = true;
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
