let menu = [
  { texto: "Inicio", href: "./index.html" },
  { texto: "Producto", href: "./producto.html" },
  { texto: "Nosotros", href: "#" },
  { texto: "Contacto", href: "#" }
];

let menuHTML = [];

for (let item of menu) {
  menuHTML.push(`<li class="nav-item"><a class="nav-link" href="${item.href}">${item.texto}</a></li>`);
}

let navHTML = `
  <nav class="navbar navbar-expand-lg navbar-info bg-info">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mi E-Commerce</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          ${menuHTML.join('')}
        </ul>
      </div>
    </div>
  </nav>`;

document.querySelector("header").innerHTML = navHTML;

  