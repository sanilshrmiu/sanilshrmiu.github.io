/*!
 * Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const form = document.getElementById("mainForm");
form.addEventListener("submit", handleSubmit);

async function fetchAllProduct() {
  let response = await fetch(" http://localhost:3000/products/");
  if (response.ok) {
    let json = await response.json();
    renderUIProducts(json);
    // populateSearch(json);
  } else {
    console.log(" HTTP- Error: " + response.status);
  }
}

async function login(data) {
  let response = await fetch("http://localhost:3000/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    let json = await response.json();
    if (json != false) {
      let myModalEl = document.getElementById("loginModal");
      let modal = bootstrap.Modal.getInstance(myModalEl);
      document.getElementById("incorrect-password").classList.add("d-none");
      modal.hide();
      storeInLocalStorage(json);
      renderPage();
    } else {
      document.getElementById("incorrect-password").classList.remove("d-none");
    }
    // populateSearch(json);
  } else {
    console.log(" HTTP- Error: " + response.status);
  }
}

function populateSearch(json) {
  const datalist = document.getElementById("products");

  json.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    datalist.appendChild(option);
  });
}

function storeInLocalStorage(res) {
  localStorage.setItem("authKey", res.token);
  localStorage.setItem("fullName", res.fullName);
  localStorage.setItem("email", res.email);
}

function renderUIProducts(json) {
  json.forEach((product) => {
    // Create a new card element using the product details
    let card = document.createElement("div");
    card.classList.add("col", "mb-5");
    card.innerHTML = `
              <div class="card h-100">
              <div class="products-thumbnail">
                  <img class="card-img-top" src="../server-side/uploads/${
                    product.imageName
                  }" alt="${product.name}" />
              </div>
              <div class="card-body p-4">
                  <div class="text-center">
                      <h5 class="fw-bolder">${product.name}</h5>
                      <span>$${product.price.toFixed(2)}</span>
                      <br>
                      <small class="text-muted">${product.stock} ${
      product.stock > 1 ? "items" : "item"
    } remaining </small>
                      <br>
                      ${
                        product.stock == 0
                          ? '<span class="badge bg-warning text-dark"><i class="bi bi-exclamation-triangle"></i> Out of Order</span>'
                          : ""
                      }
                  </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center" onclick="viewOptions(${product.id})">
                      <a class="btn btn-outline-dark mt-auto" href="#main-panel">View options</a>
                  </div>
              </div>
          </div>
        `;

    // Append the card element to the container
    document.querySelector(".items").appendChild(card);
  });
}

async function viewOptions(itemId) {
  let response = await fetch(" http://localhost:3000/products/" + itemId);
  if (response.ok) {
    let json = await response.json();
    renderSelected(json);
  } else {
    console.log(" HTTP- Error: " + response.status);
  }
}

async function renderSelected(product) {
  const descrElement = document.querySelector("#descr");
  descrElement.classList.remove("d-none");

  const imgElement = document.querySelector(".card-img-top");
  const skuElement = document.querySelector(".small");
  const titleElement = document.querySelector(".name-element");
  const priceElement = document.querySelector(".price-element");
  const descriptionElement = document.querySelector(".desc-element");
  const inputQuantity = document.querySelector("#inputQuantity");
  const addToCartButton = document.querySelector("#addToCart");

  imgElement.src = "../server-side/uploads/" + product.imageName;
  skuElement.textContent = `SKU: ${product.id}`;
  titleElement.textContent = product.name;
  priceElement.innerHTML = `
      <span>$${product.price.toFixed(2)}</span>
      <br>
      <small class="text-muted">${product.stock} ${
    product.stock > 1 ? "items" : "item"
  } remaining </small>
  ${
    product.stock == 0
      ? '<span class="badge bg-warning text-dark"><i class="bi bi-exclamation-triangle"></i> Out of Order</span>'
      : ""
  }
    `;
  inputQuantity.max = product.stock;

  descriptionElement.textContent = product.description;

  if (product.stock == 0) {
    addToCartButton.disabled = true;
    inputQuantity.disabled = true;
  } else {
    addToCartButton.disabled = false;
    inputQuantity.disabled = false;
  }

  addToCartButton.addEventListener("click", () => {
    const quantity = parseInt(inputQuantity.value);
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity);
    }
  });

  inputQuantity.addEventListener("input", () => {
    const quantity = parseInt(inputQuantity.value);
    if (quantity > product.stock) {
      inputQuantity.value = product.stock;
    }
  });
}

function addToCart(product, quantity) {
  console.log(`Added ${quantity} of ${product.name} to cart.`);
}

function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  let loginData = {
    email: email,
    password: password,
  };
  login(loginData);
  form.reset();
}

function renderPage() {
  let data = localStorage.getItem("authKey");
  let name = localStorage.getItem("fullName");
  if (data) {
    document.querySelector(".for-modal").classList.add("d-none");
    let wel = document.querySelector(".welcome-user");
    wel.innerHTML = `Welcome ${name} <small class="text-muted" role="button" onclick="logout()">( Logout )</small>`;
    wel.classList.remove("d-none");
  } else {
    document.querySelector(".for-modal").classList.remove("d-none");
    document.querySelector(".welcome-user").classList.add("d-none");
  }
}

function logout() {
  localStorage.clear();
  renderPage();
}

fetchAllProduct();
renderPage();
