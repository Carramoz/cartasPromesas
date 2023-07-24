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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver mas
                </button>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${producto.description}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
        </div>`)
    });
}//createCards
getData();
