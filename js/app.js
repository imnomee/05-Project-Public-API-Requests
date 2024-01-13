const url = 'https://randomuser.me/api/?results=12&nat=ca,us,gb,nz,au';
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');
let users = '';

getUsers(url);

async function getUsers(url) {
    const response = await fetch(url);
    if (response.ok !== true) {
        console.error('Error fetching data');
    }
    const data = await response.json();
    users = data.results;
    console.log(users);
    createCards(users);
}

function createCards(users) {
    users.forEach((user) => {
        const name =
            user.name.title + '. ' + user.name.first + ' ' + user.name.last;
        const email = user.email;
        const thumbnail = user.picture.thumbnail;
        const city = user.location.city;
        const state = user.location.state;
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-img-container">
                <img class="card-img" src="${thumbnail}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${city}, ${state}</p>
            </div>`;
        gallery.appendChild(card);
    });
}

gallery.addEventListener('click', (e) => {
    const email = e.target
        .closest('.card')
        .lastElementChild.querySelector('.card-text').innerText;
    console.log(email);

    users.forEach((user, i) => {
        if (user.email === email) {
            const modal = document.createElement('div');
            modal.classList.add('modal-container');
            modal.innerHTML = `
            <div class="modal">
                <button
                    type="button"
                    id="modal-close-btn"
                    class="modal-close-btn">
                    <strong>X</strong>
                </button>
                <div class="modal-info-container">
                    <img
                        class="modal-img"
                        src="${user.picture.large}"
                        alt="profile picture" />
                    <h3 id="name" class="modal-name cap">${user.name.first}</h3>
                    <p class="modal-text">${user.email}</p>
                    <p class="modal-text cap">${user.location.city}</p>
                    <hr />
                    <p class="modal-text">${user.phone}</p>
                    <p class="modal-text">
                        ${user.location.street.number} ${
                user.location.street.name
            }, ${user.location.country},<br>${user.location.state} ${
                user.location.postcode
            }
                    </p>
                    <p class="modal-text">Birthday: ${dateFormat(
                        user.dob.date
                    )}</p>
                </div>
            </div>

            // IMPORTANT: Below is only for exceeds tasks
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">
                    Prev
                </button>
                <button type="button" id="modal-next" class="modal-next btn">
                    Next
                </button>
            </div>
            `;
            body.appendChild(modal);
        }
    });
    const modalbtn = document.getElementById('modal-close-btn');
    modalbtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal-container');
        modal.remove();
    });
});

document.addEventListener('keydown', (e) => {
    const modal = document.querySelector('.modal-container');
    if (modal && e.key === 'Escape') {
        modal.remove();
    }
});

function dateFormat(date) {
    const dob = new Date(date);
    return dob.toLocaleDateString();
}
