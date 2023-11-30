
const BASEURL = 'http://192.168.1.84:8080';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(BASEURL + '/diseases');
  var diseases = document.getElementById("listDisease");
  diseases.innerHTML = "";
  let count = 1;
  response.json().then(value => value.forEach(element => {
    diseases.innerHTML += `
    <a id=${element.id} href="javascript:;" class="list-group-item list-group-item-action" aria-current="true"
      onclick = "this.href='disease.html?id=' + this.id">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${element.name}</h5>
    </div>
    <p class="mb-1">${element.category.value}</p>`;
    count+=1;
  }));
});
  