const url = 'https://randomuser.me/api/?results=12&nat=ca,us,gb,nz,au';
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');
let users = '';

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        return response.json().then((data) => console.log(data.results));
    }
}

getData(url);


