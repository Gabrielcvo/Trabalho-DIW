function init() {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            let str = "";
            for (let i = 0; i < data.length; i++) {
                let product = data[i];
                console.log(product);
                str += `
          <div class="card" >
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Valor: R$${product.price}</p>
            <a href="detalhes.html?id=${product.id}" class="btn btn-primary ">Detalhes</a>
          </div>
        </div>`;
            }

            console.log(str);
            document.getElementById("tela").innerHTML = str;
        });
}

function getProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((product) => {
                console.log(product);

                const productDetails =
                    document.getElementById("productDetails");
                productDetails.innerHTML = `
          <div class="card" >
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Valor: R$${product.price}</p>
              <p class="card-text">${product.description}</p>
            </div>
          </div>`;
            });
    } else {
        console.log("ID do produto não fornecido na URL.");
    }
}

document.addEventListener("DOMContentLoaded", getProductDetails);
