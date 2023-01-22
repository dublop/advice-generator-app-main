const button = document.querySelector('#icon');
const id = document.querySelector('#id');
const advice = document.querySelector('#advice');
const API = "https://api.adviceslip.com/advice";

async function fetchData(API) {
    const response = await fetch(API);
    const data = await response.json();
    return data;
}

const getData = async (API) => {
    try {
        const data = await fetchData(API);
        id.textContent = data.slip.id;
        advice.textContent = '"' + data.slip.advice + '"';
    } catch(error) {
        console.error(error);
    }
};

button.onclick = () => {
    getData(API);
}

getData(API);