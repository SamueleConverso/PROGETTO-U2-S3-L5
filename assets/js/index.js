let endPoint = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjcxMWQyMjA3MTAwMTVkZTJmM2MiLCJpYXQiOjE3MzQwODAyNzQsImV4cCI6MTczNTI4OTg3NH0.v17yR1ttMjJ502S2x6eTRuGLyGMxouajUcqejbw_Pes";
let data;

async function getData() {
  try {
    let response = await fetch(endPoint, {
      headers: {
        Authorization: apiKey,
      },
    });
    data = await response.json();
    console.log(data);
    //printImage();
  } catch (error) {
    console.log(error);
  }
}

getData();
