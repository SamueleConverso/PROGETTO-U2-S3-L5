let endPoint = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";

const url = new URLSearchParams(window.location.search);
const modifyProductId = url.get("_id");

const inputProductName = document.getElementById("inputProductName");
const inputProductDesc = document.getElementById("inputProductDesc");
const inputProductBrand = document.getElementById("inputProductBrand");
const inputProductImageUrl = document.getElementById("inputProductImageUrl");
const inputProductPrice = document.getElementById("inputProductPrice");

const btnDelete = document.getElementById("btnDelete");
const btnCancel = document.getElementById("btnCancel");
const btnAdd = document.getElementById("btnAdd");

let data;
let product;
let productId = null || modifyProductId;

document.addEventListener("load", init());

function init() {
  if (productId) {
    btnAdd.innerText = "Modify";
    getData();
  }
}

async function getData() {
  try {
    let response = await fetch(endPoint + productId, {
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
  inputProductName.value = data.name;
  inputProductDesc.value = data.description;
  inputProductBrand.value = data.brand;
  inputProductImageUrl.value = data.imageUrl;
  inputProductPrice.value = data.price;
}

class Product {
  constructor(
    _productName,
    _productDesc,
    _productBrand,
    _productImageUrl,
    _productPrice
  ) {
    this.name = _productName;
    this.description = _productDesc;
    this.brand = _productBrand;
    this.imageUrl = _productImageUrl;
    this.price = _productPrice;
  }
}

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputProductName.value &&
    inputProductDesc.value &&
    inputProductBrand.value &&
    inputProductImageUrl.value &&
    inputProductPrice.value
  ) {
    let prodName = inputProductName.value;
    let prodDesc = inputProductDesc.value;
    let prodBrand = inputProductBrand.value;
    let prodImageUrl = inputProductImageUrl.value;
    let prodPrice = inputProductPrice.value;
    product = new Product(
      prodName,
      prodDesc,
      prodBrand,
      prodImageUrl,
      prodPrice
    );
    console.log(product);
    if (!productId) {
      addData();
    } else {
      modifyData();
    }
  } else {
    alert("Devi riempire tutti i campi!");
  }
});

async function addData() {
  try {
    let response = await fetch(endPoint, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function modifyData() {
  try {
    let response = await fetch(endPoint + productId, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

btnDelete.addEventListener("click", (e) => {
  e.preventDefault();
  if (productId) {
    deleteData();
    console.log("Cancellato");
  }
});

async function deleteData() {
  try {
    let response = await fetch(endPoint + productId, {
      method: "DELETE",
      headers: {
        Authorization: apiKey,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
