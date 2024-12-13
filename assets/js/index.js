let endPoint = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";
let data;

const mainRow = document.getElementById("mainRow");

async function getData() {
  try {
    let response = await fetch(endPoint, {
      headers: {
        Authorization: apiKey,
      },
    });
    data = await response.json();
    console.log(data);
    printData();
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("load", init());

function init() {
  getData();
}

function printData() {
  for (let i = 0; i < data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("col-3");
    cardDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${data[i].imageUrl}" class="card-img-top prodImg" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="card-text">${data[i].description}</p>
    <p class="card-text h6">${data[i].price}€</p>
    <button type="button" class="btn btn-primary btnModify">Modify</button>
    <button type="button" class="btn btn-warning btnDetail">Detail</button>
  </div>
</div>
    `;
    mainRow.appendChild(cardDiv);

    const btnModify = cardDiv.querySelector(".btnModify");
    btnModify.addEventListener("click", (e) => {
      e.preventDefault();
      let secondPage = "office.html";
      let newUrl = `${secondPage}?_id=${data[i]._id}`;
      window.location.href = newUrl;
    });

    const btnDetail = cardDiv.querySelector(".btnDetail");
    btnDetail.addEventListener("click", (e) => {
      e.preventDefault();
      let secondPage = "detail.html";
      let newUrl = `${secondPage}?_id=${data[i]._id}`;
      window.location.href = newUrl;
    });
  }
}
