/* console.log("Holaaaaaaaaa mucho gusto usuario, soy Amisa");  

const h5 = document.querySelector("h5");
const text = document.querySelector(".card-text");
const img = document.querySelector(".card img");

console.log("h5",h5)

h5.innerText = "Tacos al pastor";
text.innerText = "Unos ricos tacos al pastor de carne de res, sazonada con chiles, con un trozo de piña, cilantro y cebolla.";
img.src = ""; */

document.querySelector("h1").innerHTML = "Productos";


const container = document.querySelector(".container");

        for (let i = 1; i <= 3; i++) {

            const card = `
                <div class="mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Imagen ${i}">
                        <div class="card-body">
                            <h5 class="card-title">Card ${i}</h5>
                            <p class="card-text">Descripción de la card número ${i}.</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
                </div>
            `;


            container.innerHTML += card;
        }