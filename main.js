console.log('Hello, world!');

const apiURL = 'https://fdnd.directus.app/items/person/325';
const parentElement = document.querySelector('main');

parentElement.classList.add('loading');

fetchJson(apiURL).then(function (response){
    parentElement.innerHTML = `
        <article>
        <h2>${response.data.name}</h2>
        <p>${response.data.nickname}</p>
        <p>${response.data.birthdate}</p>
        </article>
    `
    parentElement.classList.remove('loading');
})

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}