console.log('Hello, world!');

const apiURL = 'https://fdnd.directus.app/items/person/325';
const parentElement = document.querySelector('main');

parentElement.classList.add('loading');

fetchJson(apiURL).then(({data}) => {
    data.custom = JSON.parse(data.custom);

    parseCard(data, parentElement); 
    parentElement.classList.remove('loading');
})

function parseCard(userData, targetElement) {
    targetElement.innerHTML = `
        <article>
        <h2>${userData.name}</h2>
        <p>${userData.nickname}</p>
        <p>${userData.birthdate}</p>
        <table>
        <tr>
        <td>Schoenmaat:</td><td>${userData.birthdate}</td>
        </tr>
        </table>
        </article>
    `
}

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}