// Cambio de qty articulos Main Screen

let minusBtn = document.querySelector('.input_minus');
let plusBtn = document.querySelector('.input_plus');
let usrInput = document.querySelector('.input_number');

let usrInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
  usrInputNumber++;
  usrInput.value = usrInputNumber;
  console.log(usrInputNumber);
});

minusBtn.addEventListener('click', ()=>{
  usrInputNumber--;
  if (usrInputNumber <= 0) {
    usrInputNumber = 0
  }
  usrInput.value = usrInputNumber;
  console.log(usrInputNumber);
});

// adicion de total de productos al carrito al interactuar con Añadir al Carrito
const addToCartBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.header_cart-notificacion');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
  lastValue = lastValue + usrInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = 'block';
  drawProductInModal();
});

// Mostrar el modal con los valores del Carrito

const cartIconBtn = document.querySelector('.header_cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal_checkout-container');

cartIconBtn.addEventListener('click', ()=>{
  // cartModal.style.display = 'block';
  cartModal.classList.toggle('modalShow');

  if (lastValue === 0) {
    productContainer.innerHTML = '<p class="cart-empty">Tu carrito esta vacio</p>';
  } else {
    drawProductInModal();
  }

});

// Cambiar imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector('.gallery_image-container');
const previousGalleryBtn = document.querySelector('.gallery_previous');
const nextGalleryBtn = document.querySelector('.gallery_next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
  changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener('click', ()=>{
  changePreviousImage(imageContainer);
});

// Mostrar modal de imagenes cuando se hace click sobre la imagen
const imagesModal = document.querySelector('.modal-gallery_bg');
const closeModalBtn = document.querySelector('.modal-gallery_close');

imageContainer.addEventListener('click', ()=>{
  imagesModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
  imagesModal.style.display = 'none';
});

// Cambio de imagen principal mediante miniaturas
let galleryMinis = document.querySelectorAll('.gallery_mini');
galleryMinis = [...galleryMinis];

galleryMinis.forEach(galleryMinis => {
  galleryMinis.addEventListener('click', event=>{
    console.log(event.target.id);
    imageContainer.style.backgroundImage = `url('images-tienda/image-product-${event.target.id}.jpg')`
  });
});

// Cambio de imagen principal mediante miniaturas en el modal
let modalMinis = document.querySelectorAll('.modal-gallery_minis');
const modalImageContainer = document.querySelector('.modal-gallery_image-container');
modalMinis = [...modalMinis];

modalMinis.forEach(modalMinis => {
  modalMinis.addEventListener('click', event=>{
    console.log(event.target.id.slice(-1));
    modalImageContainer.style.backgroundImage = `url('images-tienda/image-product-${event.target.id.slice(-1)}.jpg')`
  });
});

// Cambiar imagen principal del modal mediante botines
const nextModalBtn = document.querySelector('.modal-gallery_next');
const previousModalBtn = document.querySelector('.modal-gallery_previous');

nextModalBtn.addEventListener('click', ()=>{
  changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener('click', ()=>{
  changePreviousImage(modalImageContainer);
});

// Mostrar navbar de ventas cuando presiono el boton de menu
const burgerBtn = document.querySelector('.header_tienda-menu');
const modalNavbar = document.querySelector('.modal-navbar_bg');
const closeModalNavbar = document.querySelector('.modal-navbar-close')

// burgerBtn.addEventListener('click', ()=>{
// modalNavbar.style.display = 'block';
// });

closeModalNavbar.addEventListener('click', ()=>{
modalNavbar.style.display = 'none';
});

// FUNCIONES

// Borrar el contenido del Carrito
function deleteProduct() {
  const deleteProductBtn = document.querySelector('.cart-modal_delete');

  deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Tu carrito esta vacio</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}

// Escritura de productos en el carrito
function drawProductInModal() {
  productContainer.innerHTML = `
    <div class="cart-modal_details-container">
      <img class="cart-modal_image" src="../Images/images-tienda/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="cart-modal_product">Coleccion limitada de temporada</p>
        <p class="cart-modal_price">$350 x3 <span>$1050.00</span></p>
      </div>
      <img class="cart-modal_delete" src="../Images/images-tienda/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal_checkout" type="button" name="button">Checkout</button>`

  deleteProduct();
  let priceModal = document.querySelector('.cart-modal_price');
  priceModal.innerHTML = `$350 x${lastValue} <span>$${lastValue*350}.00</span>`
}

// Cambio de imagenes mediante botones
function changeNextImage(imgContainer) {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url('images-tienda/image-product-${imgIndex}.jpg')`
}

function changePreviousImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('images-tienda/image-product-${imgIndex}.jpg')`
}
