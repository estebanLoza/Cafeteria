// 1. Seleccionar los elementos del DOM
const btnBebidas = document.getElementById('btn-bebidas');
const btnPanes = document.getElementById('btn-panes');
const itemsMenu = document.querySelectorAll('.filterDiv'); // ¡Esta línea era la que faltaba!
const imagenDestacada = document.getElementById('imagen-destacada');
const textoDestacado = document.getElementById('texto-destacado'); // Nuevo contenedor de texto

// 2. Función principal para Filtrar
function filtrarMenu(categoria) {
  itemsMenu.forEach(item => {
    // Primero, le quitamos la clase 'show' a todos
    item.classList.remove('show');

    // Si el elemento contiene la clase de la categoría que buscamos, lo mostramos
    if (item.classList.contains(categoria)) {
      item.classList.add('show');
    }
  });
}

// 3. Eventos de Clic para los botones
btnBebidas.addEventListener('click', (e) => {
  e.preventDefault(); // Evita que el enlace salte en la página
  filtrarMenu('bebidas');
});

btnPanes.addEventListener('click', (e) => {
  e.preventDefault();
  filtrarMenu('pan');
});

// Inicializar mostrando las bebidas por defecto al cargar la página [cite: 98]
filtrarMenu('bebidas');

// 4. Lógica para el cambio de imágenes y textos (Hover)
itemsMenu.forEach(item => {
  item.addEventListener('mouseenter', () => {

    // Obtenemos la información de los atributos 'data-'
    const nuevaImagen = item.getAttribute('data-img');
    const nuevaDescripcion = item.getAttribute('data-desc');

    // Cambiamos la imagen [cite: 31]
    if (nuevaImagen) {
      imagenDestacada.setAttribute('src', nuevaImagen);
    }

    // Cambiamos el texto usando textContent [cite: 103]
    if (nuevaDescripcion) {
      textoDestacado.textContent = nuevaDescripcion;
    } else {
      // Por si se te olvida ponerle data-desc a algún producto
      textoDestacado.textContent = "Delicioso producto de nuestra cafetería.";
    }
  });
});
