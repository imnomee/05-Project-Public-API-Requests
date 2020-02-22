const containerSearch = document.getElementsByClassName("search-container")[0];

containerSearch.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
 </form>`;

const gallery = document.getElementById("gallery");

const body = document.getElementsByTagName("body")[0];

fetch("https://randomuser.me/api/?results=12&nat=gb")
    .then(response => response.json())
    .then(data => generateGallery(data));

// FUNCTIONS

function generateGallery(data) {
    gallery.innerHTML = "";
    data.results.map(profile => {
        generateCard(profile);
    });
}

function generateCard(data) {
    const picture = data.picture.thumbnail;
    const name = `${data.name.first} ${data.name.last}`;
    const email = data.email;
    const cityState = `${data.location.city}, ${data.location.state}`;
    gallery.innerHTML += `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${picture}" alt="profile picture">
            </div>

            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${cityState}</p>
            </div>
        </div>
        `;
}
