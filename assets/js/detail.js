let endPoint = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const url = new URLSearchParams(window.location.search);
const detailProductId = url.get("_id");

const pName = document.getElementById("pName");
const pDesc = document.getElementById("pDesc");
const pBrand = document.getElementById("pBrand");
const pImage = document.getElementById("pImage");
const pPrice = document.getElementById("pPrice");

let data;

document.addEventListener("load", init());

function init() {
  getData();
}

async function getData() {
  try {
    let response = await fetch(endPoint + detailProductId, {
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

function printData() {
  pName.innerText = data.name;
  pDesc.innerText = data.description;
  pBrand.innerText = data.brand;
  pImage.setAttribute("src", data.imageUrl);
  pPrice.innerText = data.price + "€";
}
