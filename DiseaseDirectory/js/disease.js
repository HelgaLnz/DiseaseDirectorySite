const BASEURL = 'http://192.168.1.84:8080';
const diseaseName = document.getElementById("diseaseName");
const diseaseImage = document.getElementById("diseaseImage");
const diseaseDefinition = document.getElementById("diseaseDefinition");

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search)  
  const response = await fetch(BASEURL + '/diseases/' + params.get('id'));
  response.json().then(response => {
    console.log(response);
    diseaseName.innerHTML += `<h2 class>${response.name}</h2>`;
    diseaseImage.innerHTML = `<img src="img/florid-medicines-and-a-digital-thermometer.gif">`
    diseaseDefinition.innerHTML += `<h4>${response.definition}</h4>`
  });
})
