// fetch api

 async function fetchProducts(){
    try{
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        console.log(products)

        let productContainer = document.getElementById('product-list');
        productContainer.innerHTML="";

        products.forEach(product => {
            let productCard = `
            <div class="product-item">
                <img src="${product.image}">
                <h2>${product.title}</h2>
                <p>${product.price}</p>
            </div>`;

            productContainer.innerHTML += productCard;
        })
    }catch(error){
        console.log("error fetching products: ", error)
    }
}

fetchProducts();