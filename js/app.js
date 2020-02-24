const gallery = document.getElementById("gallery");
const searchContainer = document.getElementsByClassName("search-container")[0];
const body = document.getElementsByTagName("body")[0];

const apiURL = "https://randomuser.me/api/?results=12&nat=ca,us,gb,nz,au";

createSearch();

const userProfiles = {
    results: [
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Aubrey",
                last: "Lawrence"
            },
            location: {
                street: {
                    number: 2366,
                    name: "Preston Rd"
                },
                city: "Hampton",
                state: "Virginia",
                country: "United States",
                postcode: 88736,
                coordinates: {
                    latitude: "-20.7392",
                    longitude: "16.8793"
                },
                timezone: {
                    offset: "+6:00",
                    description: "Almaty, Dhaka, Colombo"
                }
            },
            email: "aubrey.lawrence@example.com",
            login: {
                uuid: "18fc3a6e-d87b-48ca-a9a3-a5d387684ad9",
                username: "brownostrich412",
                password: "pablo",
                salt: "FEUGWM6J",
                md5: "2c4914a7c70d191f482f047a80d1a752",
                sha1: "0916719cc9208e3d11fcf185cee79b79c5618f1d",
                sha256:
                    "0d0d3bac29caee8a582eb4c58cbc2d92281d8b0d79faed8aaa94990e1c4a5c2d"
            },
            dob: {
                date: "1991-09-15T02:20:48.704Z",
                age: 28
            },
            registered: {
                date: "2005-07-27T01:02:09.626Z",
                age: 14
            },
            phone: "(435)-268-6390",
            cell: "(896)-029-2511",
            id: {
                name: "SSN",
                value: "187-41-9960"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/48.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/48.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Jacob",
                last: "Martin"
            },
            location: {
                street: {
                    number: 9216,
                    name: "Miller Ave"
                },
                city: "Saint Paul",
                state: "Kansas",
                country: "United States",
                postcode: 83451,
                coordinates: {
                    latitude: "-28.7483",
                    longitude: "170.7857"
                },
                timezone: {
                    offset: "+10:00",
                    description: "Eastern Australia, Guam, Vladivostok"
                }
            },
            email: "jacob.martin@example.com",
            login: {
                uuid: "0ee913e3-9232-4dc6-9ff9-0f378fe8c4db",
                username: "tinygoose250",
                password: "yyyy",
                salt: "R090qhW8",
                md5: "62805215678b6367ee57f19a22fc8411",
                sha1: "935b401c11ac8664bfe5b17223c059f80904fd7d",
                sha256:
                    "1c3e3923339ffd528cdf8eb9376273e5ab57d9ce01d00ee80efc5a6d0430574e"
            },
            dob: {
                date: "1957-03-03T09:00:06.751Z",
                age: 62
            },
            registered: {
                date: "2014-04-06T11:20:02.860Z",
                age: 5
            },
            phone: "(961)-881-2681",
            cell: "(589)-826-8613",
            id: {
                name: "SSN",
                value: "558-39-9780"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/70.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/70.jpg"
            },
            nat: "US"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Bonnie",
                last: "Gonzalez"
            },
            location: {
                street: {
                    number: 4614,
                    name: "Valley View Ln"
                },
                city: "High Point",
                state: "New Hampshire",
                country: "United States",
                postcode: 76401,
                coordinates: {
                    latitude: "88.4773",
                    longitude: "170.0734"
                },
                timezone: {
                    offset: "0:00",
                    description:
                        "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            email: "bonnie.gonzalez@example.com",
            login: {
                uuid: "f41cffe6-23bb-4fa2-8d23-9e38ded49db2",
                username: "crazyelephant979",
                password: "ceng",
                salt: "DLGyYNqf",
                md5: "000b3c44ce0e11c0d883f00dcc17dddc",
                sha1: "b4d206a2a9a6606223f1211ab0f56ce615a519cc",
                sha256:
                    "994872265647564c081b4a82053e7243abbe9d560c9d7fa4b533831f8eba0c24"
            },
            dob: {
                date: "1960-02-20T23:48:41.485Z",
                age: 59
            },
            registered: {
                date: "2016-06-21T19:21:52.177Z",
                age: 3
            },
            phone: "(462)-763-1772",
            cell: "(907)-678-6513",
            id: {
                name: "SSN",
                value: "553-47-7042"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/17.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Elijah",
                last: "Fisher"
            },
            location: {
                street: {
                    number: 1755,
                    name: "Mcclellan Rd"
                },
                city: "St. Petersburg",
                state: "California",
                country: "United States",
                postcode: 55903,
                coordinates: {
                    latitude: "-34.2507",
                    longitude: "14.1769"
                },
                timezone: {
                    offset: "+7:00",
                    description: "Bangkok, Hanoi, Jakarta"
                }
            },
            email: "elijah.fisher@example.com",
            login: {
                uuid: "9d6fecc1-cd25-4b77-969b-7986ca41343f",
                username: "beautifulcat807",
                password: "testpass",
                salt: "dCaF2p0K",
                md5: "321ae00867150ed1284d438552962325",
                sha1: "686265347b9d2860fcac46619ae21944b8ddfa0b",
                sha256:
                    "3fd5db4be03bd58de70285021ab4b8773a7e64dda82bce800cf7989e2c777307"
            },
            dob: {
                date: "1966-01-05T18:30:48.005Z",
                age: 53
            },
            registered: {
                date: "2007-03-03T23:19:53.125Z",
                age: 12
            },
            phone: "(559)-697-3369",
            cell: "(771)-803-1841",
            id: {
                name: "SSN",
                value: "648-13-7310"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/4.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Gilbert",
                last: "Roberts"
            },
            location: {
                street: {
                    number: 9416,
                    name: "Oak Lawn Ave"
                },
                city: "Tempe",
                state: "Arizona",
                country: "United States",
                postcode: 83359,
                coordinates: {
                    latitude: "-38.4642",
                    longitude: "112.9756"
                },
                timezone: {
                    offset: "+4:00",
                    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            email: "gilbert.roberts@example.com",
            login: {
                uuid: "27a3b952-cb3e-41b9-bca9-259957bb064b",
                username: "tinymouse365",
                password: "canuck",
                salt: "lzzKyVT1",
                md5: "7049a4bc2eb8b9e4b51d04e9b47e6cb4",
                sha1: "addac52a34c8cea63efa59c811b1709600718f75",
                sha256:
                    "915de86b85764b46ba24e03ec79e4507c2db5f64c8e2ed69965382147fd00d2c"
            },
            dob: {
                date: "1953-06-16T18:10:30.753Z",
                age: 66
            },
            registered: {
                date: "2011-03-27T03:03:02.674Z",
                age: 8
            },
            phone: "(423)-716-5269",
            cell: "(303)-025-7743",
            id: {
                name: "SSN",
                value: "366-84-6016"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/61.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/61.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "David",
                last: "Roberts"
            },
            location: {
                street: {
                    number: 8352,
                    name: "Paddock Way"
                },
                city: "Greensboro",
                state: "Maine",
                country: "United States",
                postcode: 79328,
                coordinates: {
                    latitude: "-70.1949",
                    longitude: "-71.3545"
                },
                timezone: {
                    offset: "+4:30",
                    description: "Kabul"
                }
            },
            email: "david.roberts@example.com",
            login: {
                uuid: "3d27d180-708d-44f9-a02c-64089f9fb649",
                username: "blueswan201",
                password: "bite",
                salt: "XD3fXK8N",
                md5: "3df9ffc911f2abb7033a512d559c72a3",
                sha1: "b9ea531b70a40d74881a68f343c5be6aec1d8ddb",
                sha256:
                    "435f8826176d2510e672da4150fe6e28eb4ef75dd157b7a3928f55e7dab55044"
            },
            dob: {
                date: "1991-12-25T09:19:04.317Z",
                age: 28
            },
            registered: {
                date: "2008-04-12T13:05:54.954Z",
                age: 11
            },
            phone: "(977)-589-2833",
            cell: "(686)-384-3934",
            id: {
                name: "SSN",
                value: "697-49-2154"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/19.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            },
            nat: "US"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Georgia",
                last: "Holmes"
            },
            location: {
                street: {
                    number: 4101,
                    name: "Daisy Dr"
                },
                city: "Los Lunas",
                state: "Alaska",
                country: "United States",
                postcode: 22644,
                coordinates: {
                    latitude: "76.3231",
                    longitude: "102.4698"
                },
                timezone: {
                    offset: "+8:00",
                    description: "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            email: "georgia.holmes@example.com",
            login: {
                uuid: "c3d051e7-2a7e-415b-920d-16caf9e0d366",
                username: "ticklishbear125",
                password: "abstr",
                salt: "o01sTYpR",
                md5: "577b5eea9dc697ca29a0f39b644fce5b",
                sha1: "f9a9257a55beb18648af0b39c36194613c91d1b2",
                sha256:
                    "140e17d24aa7d1818ae37a75cc3fc0cc2903dfdb8fd7281233703446aeaf4f3c"
            },
            dob: {
                date: "1966-06-01T04:15:14.099Z",
                age: 53
            },
            registered: {
                date: "2013-12-06T02:31:35.446Z",
                age: 6
            },
            phone: "(270)-322-7989",
            cell: "(725)-936-6552",
            id: {
                name: "SSN",
                value: "106-01-3701"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/88.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/88.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Perry",
                last: "Fowler"
            },
            location: {
                street: {
                    number: 3879,
                    name: "Hickory Creek Dr"
                },
                city: "Allentown",
                state: "Tennessee",
                country: "United States",
                postcode: 15156,
                coordinates: {
                    latitude: "16.5264",
                    longitude: "-36.9088"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "perry.fowler@example.com",
            login: {
                uuid: "cbd3da42-8974-44c2-b94b-f516139bc756",
                username: "organicgorilla186",
                password: "archie",
                salt: "A3RqFaO3",
                md5: "c015771dd4275e50a53744ec0d0a29d9",
                sha1: "109d484efe107d585f684f0706daa1dbe4f49497",
                sha256:
                    "3b314f31650c11ca5a33d149ebc01238d1d8f59aed5e0ecf3ac72b0134a40504"
            },
            dob: {
                date: "1953-03-22T16:27:04.355Z",
                age: 66
            },
            registered: {
                date: "2017-07-16T17:42:17.742Z",
                age: 2
            },
            phone: "(392)-075-7789",
            cell: "(916)-746-6888",
            id: {
                name: "SSN",
                value: "370-22-1898"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/55.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/55.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Jerry",
                last: "James"
            },
            location: {
                street: {
                    number: 3597,
                    name: "Daisy Dr"
                },
                city: "Peoria",
                state: "Utah",
                country: "United States",
                postcode: 98034,
                coordinates: {
                    latitude: "34.7662",
                    longitude: "41.6922"
                },
                timezone: {
                    offset: "+4:30",
                    description: "Kabul"
                }
            },
            email: "jerry.james@example.com",
            login: {
                uuid: "e7a01b04-3cad-4965-8c7e-1c9fa22d1d53",
                username: "orangeduck839",
                password: "stunner",
                salt: "FJz2lUn6",
                md5: "4d99b2e55e480c0d49a5beb097e49cbb",
                sha1: "f08e99b4705fe98463cbda4f56c1d94a360f79e5",
                sha256:
                    "f52dcc3e6f2cee719c0d01b8d45092e7c8bf1a9a628b3b18aba71857dcc9dbe7"
            },
            dob: {
                date: "1979-06-17T17:28:39.837Z",
                age: 40
            },
            registered: {
                date: "2010-09-05T05:33:53.644Z",
                age: 9
            },
            phone: "(928)-010-1784",
            cell: "(885)-948-8782",
            id: {
                name: "SSN",
                value: "556-40-3314"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/9.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg"
            },
            nat: "US"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Doris",
                last: "Lucas"
            },
            location: {
                street: {
                    number: 6593,
                    name: "Edwards Rd"
                },
                city: "Augusta",
                state: "Connecticut",
                country: "United States",
                postcode: 23717,
                coordinates: {
                    latitude: "72.3849",
                    longitude: "91.6061"
                },
                timezone: {
                    offset: "+9:00",
                    description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            email: "doris.lucas@example.com",
            login: {
                uuid: "c8df4d65-be95-4e65-b57b-fb6f4387eb56",
                username: "happyfrog212",
                password: "chester",
                salt: "ee9LdHw9",
                md5: "9546f17c62743b782b3d945f22cafb73",
                sha1: "c26eddf32f040a6db2740488f36ba6b477ed9d0e",
                sha256:
                    "dbf97b9ac5c3d14cae4e8ece8d384083030bfe21da29e6a9df3fe82b753ae4fa"
            },
            dob: {
                date: "1995-07-25T11:30:47.196Z",
                age: 24
            },
            registered: {
                date: "2010-12-25T17:56:15.060Z",
                age: 9
            },
            phone: "(054)-231-2514",
            cell: "(292)-837-0205",
            id: {
                name: "SSN",
                value: "123-29-9004"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/21.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/21.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "John",
                last: "Martinez"
            },
            location: {
                street: {
                    number: 641,
                    name: "Elgin St"
                },
                city: "Paterson",
                state: "Massachusetts",
                country: "United States",
                postcode: 37298,
                coordinates: {
                    latitude: "-41.2484",
                    longitude: "125.0486"
                },
                timezone: {
                    offset: "-8:00",
                    description: "Pacific Time (US & Canada)"
                }
            },
            email: "john.martinez@example.com",
            login: {
                uuid: "628023fd-4bc4-4b1d-806a-e3b0533ceeec",
                username: "beautifulzebra555",
                password: "1965",
                salt: "7E5rU0DS",
                md5: "96ea586d4171d73a4966d614a1d2d9bc",
                sha1: "a890a063c787bfee3eed92c01c687e19e268f50d",
                sha256:
                    "a739082dcf0cf2f21b911c7d925a511428e47c9d7b9e60b89d09b640e1c697eb"
            },
            dob: {
                date: "1963-11-02T19:11:58.517Z",
                age: 56
            },
            registered: {
                date: "2009-02-21T21:53:50.578Z",
                age: 10
            },
            phone: "(169)-099-9763",
            cell: "(752)-008-7626",
            id: {
                name: "SSN",
                value: "338-83-1897"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/93.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/93.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Terrence",
                last: "Lawson"
            },
            location: {
                street: {
                    number: 7609,
                    name: "Sunset St"
                },
                city: "Joliet",
                state: "Connecticut",
                country: "United States",
                postcode: 32545,
                coordinates: {
                    latitude: "-41.7474",
                    longitude: "29.6948"
                },
                timezone: {
                    offset: "+10:00",
                    description: "Eastern Australia, Guam, Vladivostok"
                }
            },
            email: "terrence.lawson@example.com",
            login: {
                uuid: "f4ab8932-1902-44b0-ad3c-46650d06eb48",
                username: "purplemeercat670",
                password: "black",
                salt: "dXQSUMJ4",
                md5: "5614f5e5d24b37ff54a1e05222b649a1",
                sha1: "84bbeeb1ca9af13c379483f7fc6554cb798b8257",
                sha256:
                    "6442864f028accc7908534c5ae5f640aa5552afa120f574fb07dd56c20aee5ae"
            },
            dob: {
                date: "1990-01-01T05:30:14.003Z",
                age: 30
            },
            registered: {
                date: "2003-03-13T00:40:08.010Z",
                age: 16
            },
            phone: "(453)-405-5662",
            cell: "(052)-927-0570",
            id: {
                name: "SSN",
                value: "994-81-6340"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/10.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/10.jpg"
            },
            nat: "US"
        }
    ]
};
createCards(userProfiles);

// function createProfiles(data) {
//     const profiles = data.results;
//     console.log(profiles);

//     return profiles;
// }
// function fetchData() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(createProfiles);
// }

function createCards(data) {
    let users = "";
    data.results.forEach(user => {
        dataUserName = user.name.first;
        users += `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${user.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first}</h3>
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
    const name = userID.name.last;
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
