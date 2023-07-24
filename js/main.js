let mainProds = document.getElementById("mainProds");
function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/", {method: "GET"}
    );
    promesa.then(
        (response)=>{
            response.json()
            .then((data)=>{
                createCards(data);
            })
            .catch(
                (error)=>{console.error("Problema en el json")}
            )
        })
        .catch(
            (error)=>{console.log(error, "Ocurrio un error en las solicitud");
    });
}//getData
function createCards(prods) {
    prods.forEach((producto) => {
        mainProds.insertAdjacentHTML("beforeend",`
        <div id="1" class="card .h-100" style="width: 25%;">
                <img src="${producto.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">${producto.description}</p>
                <p class="card-text"><small class="text-body-secondary"><strong>$${producto.price}</strong></small></p>
                </div>
            </div>`)
    });
}//createCards\
getData();
