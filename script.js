
// Modo claro/oscuro
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contador y referencias
let contador = 0;
const contadorCarrito = document.getElementById("contador-carrito");
const cantidadModal = document.getElementById("cantidad-carrito-modal");
const carritoIcono = document.querySelector(".carrito");
const botonesCompra = document.querySelectorAll(".comprar-btn");

// Evento de compra
botonesCompra.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Evitar doble clic
    if (btn.classList.contains("comprado")) return;

    // Cambiar texto y estilo del botón
    btn.textContent = "Agregado";
    btn.classList.add("comprado");

    // Actualizar contador
    contador++;
    contadorCarrito.textContent = contador;
    cantidadModal.textContent = contador;

    // Animación al carrito
    carritoIcono.classList.add("animar-carrito");
    setTimeout(() => {
      carritoIcono.classList.remove("animar-carrito");
    }, 500);

    // Restaurar botón después de 2 segundos
    setTimeout(() => {
      btn.textContent = "Comprar";
      btn.classList.remove("comprado");
    }, 2000);
  });
});

// Filtro por estilo
const filtro = document.getElementById("filtro-estilo");
const tarjetas = document.querySelectorAll(".col-md-4");

filtro.addEventListener("change", () => {
  const estilo = filtro.value;

  tarjetas.forEach((tarjeta) => {
    const claseEstilo = tarjeta.dataset.estilo;
    if (estilo === "todos" || claseEstilo === estilo) {
      tarjeta.style.display = "";
    } else {
      tarjeta.style.display = "none";
    }
  });
});









