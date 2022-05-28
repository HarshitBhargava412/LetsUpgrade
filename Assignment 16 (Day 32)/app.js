let productsDiv = document.querySelector(".products");
let searchField = document.querySelector(".inputField");
let searchButton = document.querySelector("#submit");
let options = document.querySelector("#select-option");
let filterButton = document.querySelector("#filter-sort");

const URL = "https://fakestoreapi.com/products";
const ascURL = "https://fakestoreapi.com/products?sort=asc";
const descURL = "https://fakestoreapi.com/products?sort=desc";

const getLowPriceProducts = async () => {
    const response = await fetch(ascURL, {method: "GET"});
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++){
        for (let j = i+1; j < data.length; j++) {
            if(data[i].price > data[j].price) {
                tempData = data[i];
                data[i] = data[j];
                data[j] = tempData;
            }
        }
    };

    data.forEach((product) => {
        createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
    });
}

const getHighPriceProducts = async () => {
    const response = await fetch(ascURL, {method: "GET"});
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++){
        for (let j = i+1; j < data.length; j++) {
            if(data[i].price < data[j].price) {
                tempData = data[i];
                data[i] = data[j];
                data[j] = tempData;
            }
        }
    };

    data.forEach((product) => {
        createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
    });
}

const getAscProducts = async () => {
    const response = await fetch(ascURL, {method: "GET"});
    const data = await response.json();
    console.log(data);

    data.forEach((product) => {
        createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
    });
}

const getDescProducts = async () => {
    const response = await fetch(descURL, {method: "GET"});
    const data = await response.json();
    console.log(data);

    data.forEach((product) => {
        createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
    });
}

filterButton.addEventListener("click", () => {
    let value = options.value;
    console.log(value);
    productsDiv.innerHTML = "";

    if(value === "low"){
        getLowPriceProducts();
    } else if(value === "high") {
        getHighPriceProducts();
    } else if(value === "asc") {
        getAscProducts();
    } else if(value === "desc") {
        getDescProducts();
    } else {
        getProducts();
    }
})

const getProducts = async () => {
    const response = await fetch(URL, {method: "GET"});
    const data = await response.json();
    console.log(data);

    data.forEach((product) => {
        createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
    });

    searchButton.addEventListener("click", () => {
        const searchText = searchField.value;
        let filteredArray = data.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

        console.log(filteredArray);
        productsDiv.innerHTML = "";
        options.value = "none";

        if(searchText === "") {
            data.forEach((product) => {
                createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
            });
        } else {
            filteredArray.forEach((product) => {
                createElement(product.image, product.title, product.title, product.category.toUpperCase(), `${product.price} $`);
            });
        }
    });
}

getProducts();

const createElement = (imageSRC, imageALT, title, category, price) => {
    let productCardDiv = document.createElement("div");
    productCardDiv.classList.add("product-card");

    let productCardImageDiv = document.createElement("div");
    productCardImageDiv.classList.add("product-image");
    
    let productCardImage = document.createElement("img");
    productCardImage.src = imageSRC;
    productCardImage.alt = imageALT;

    productCardImageDiv.appendChild(productCardImage);
    productCardDiv.appendChild(productCardImageDiv);

    let productCardBody = document.createElement("div");
    productCardBody.classList.add("product-card-body");

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(`${title.substr(0, 40) + "..."}`);
    h3.appendChild(h3Text);

    let p = document.createElement("p");
    let pText = document.createTextNode(category);
    p.appendChild(pText);

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode(price);
    h4.appendChild(h4Text);

    productCardBody.appendChild(h3);
    productCardBody.appendChild(p);
    productCardBody.appendChild(h4);

    productCardDiv.appendChild(productCardBody);

    productsDiv.appendChild(productCardDiv);
}