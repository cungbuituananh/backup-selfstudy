$(() => {
  let inputEle = $(".show-input");
  console.log(inputEle);
});

async function fetchApi() {
  let url = "https://api-cakes.herokuapp.com/products?_limit=10&_page=1";
  let response = await fetch(url);
  let responseData = await response.json();
  console.log(response);
}

fetchApi();
