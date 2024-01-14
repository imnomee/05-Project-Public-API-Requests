const gallery = document.getElementById('gallery'); //Gallery to draw cards
const searchContainer = document.getElementsByClassName('search-container')[0]; //Container for search
const body = document.getElementsByTagName('body')[0]; //Main body

const apiURL = 'https://randomuser.me/api/?results=12&nat=ca,us,gb,nz,au'; //Api URL to fetch
let userProfiles = ''; //Saving user Profiles in this variables to start with

fetchData(apiURL);

/* MAIN FUNCTION TO FETCH API AND CALL METHODS
    1. first it will check status if it return ok
    2. saving the response in json format
    3. creating search element and returning filtered profiles and saving it to userProfiles
    4. creating cards using the userProfiles passed from search method
    5. In case of any error it will catch here. 
*/

function fetchData() {
    fetch(apiURL)
        .then(checkStatus)
        .then((response) => response.json())
        .then(createSearch)
        .then(createCards)
        .catch((err) => console.log(err));
}

//Checking status of the response, if okay proceed, if not throw error
function checkStatus(response) {
    if (response.ok == true) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

//This function creates the search element and passing the userProfiles.
function createSearch(data) {
    userProfiles = data.results; //setting userProfiles to data.results only
    searchContainer.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

    const searchInput = document.getElementById('search-input'); //Search input field
    const searchBtn = document.getElementById('search-submit'); //search submit button

    //Search submit buttons listener
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault(); // preventing default behaviour
        const text = searchInput.value.toLowerCase();
        const searchResults = []; //empty search array only used for search results
        if (text != '' && text.length > 2) {
            //if input not null and more than 2 characters
            userProfiles.forEach((profile) => {
                // search all userProfiles json name text
                const name =
                    `${profile.name.first} ${profile.name.last}`.toLowerCase();
                // if it has name
                if (name.includes(text)) {
                    gallery.innerHTML = ''; //clear the gallery
                    searchResults.push(profile); // push the profile to search array, do that for all matches
                }
            });
            //If returned any results create new cards with search array
            if (searchResults.length > 0) {
                createCards(searchResults);
            } else {
                //Else display the message
                gallery.innerHTML = `
                <h1 
                    style="color: #f1cd57c9">
                        Sorry! we couldn't find any results for '${searchInput.value}'.<br>
                        Enter a new search string or <br>
                        Press Search &#x1F50D; button again to view all records
                </h1>
                    `;
            }
        } else {
            // if search string was less than 2 characters or empty or search pressed again.
            // create cards using all profiles
            createCards(userProfiles);
        }
        searchInput.value = ''; // clear the search input
    });

    return userProfiles; // return profiles
}

/*
Creating cards with the passed data into it.
It will create cards using json data 
You can pass search results or all profiles
*/

function createCards(data) {
    let profiles = '';
    data.forEach((user) => {
        profiles += `<div class="card">
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

    gallery.innerHTML = profiles; // Setting gallery container innerHTML to profiles created

    //Query all the cards and add event listener on all
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, value) => {
        /*Here in for each method we have used default value paramenter
        which stores the Index value of current card
        that gives us the index of the current card
        */
        card.addEventListener('click', () => {
            /* here we used the index we got from the forEach and 
             created a modal using the index and array passed in
            
             we can pass any array with one index value,
             it will show modal of that index from array 

             The login behind passing array and value is:
             sometimes search results return multiple results, this way
             it will iterate though all the records, single or multiple
             all users array or search array. 
             */
            showModal(data, value);
        });
    });
}

/* this showModal function takes array and index,
    and returns Modal of the index passed in from that array

*/
function showModal(arr, index) {
    const userID = arr[index]; // This is record ID we are using to get more details
    const img = userID.picture.medium;
    const name = `${userID.name.first} ${userID.name.last}`;
    const email = userID.email;
    const cityState = `${userID.location.city}, ${userID.location.State}`;
    const cell = userID.cell;
    const address = `${userID.location.street.number} ${userID.location.street.name}, ${userID.location.city}
                    ${userID.location.state}, ${userID.location.country} ${userID.location.postcode}`;
    const rawDOB = new Date(userID.dob.date);
    const dob = rawDOB.toLocaleDateString(); //this toLocaleDateString formats the date passed in

    const modalContainer = document.createElement('div'); //Main modal container
    modalContainer.className = 'modal-container';
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

    //Modal close button
    const modalCloseBtn = document.getElementById('modal-close-btn');
    modalCloseBtn.addEventListener('click', (e) => {
        if (e.target.id == 'modal-close-btn') {
            modalContainer.style.display = 'none';
            modalContainer.innerHTML = '';
        }
    });
    //If we click outside the modal it will close
    window.addEventListener('click', (e) => {
        if (event.target == modalContainer) {
            modalContainer.style.display = 'none';
            modalContainer.innerHTML = '';
        }
    });

    //Modal buttons set, previous and next buttons
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const cards = document.querySelectorAll('.card');

    prevBtn.addEventListener('click', (e) => {
        if (e.target.id == 'modal-prev') {
            if (cards[index].previousElementSibling) {
                //If card has previous element
                modalContainer.style.display = 'none'; //hide current modal
                modalContainer.innerHTML = ''; //clear current modal
                showModal(arr, index - 1); //Generate new modal (passing array and index-1 for previous)
            } else if (!cards[index].previousElementSibling) {
                prevBtn.disabled = true; //if no previous element, disable the button
            }
        }
    });

    nextBtn.addEventListener('click', (e) => {
        if (e.target.id == 'modal-next') {
            if (cards[index].nextElementSibling) {
                //If card has next element
                modalContainer.style.display = 'none'; //hide current modal
                modalContainer.innerHTML = ''; //clear current modal
                showModal(arr, index + 1); //generate new modal (passing the array and index+1 for next)
            } else if (!cards[index].previousElementSibling) {
                nextBtn.disabled = true; //if no next element, disable button
            }
        }
    });
}
