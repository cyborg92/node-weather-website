console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search=document.querySelector('input');
let locationElem=document.getElementById('location');
let forecastElem=document.getElementById('forecast');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`/weather?address=${search.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationElem.innerText=data.error;
                forecastElem.innerText='';
            } else {
                locationElem.innerText=data.location;
                forecastElem.innerText=data.forecast;
            }
        });
    })
})
