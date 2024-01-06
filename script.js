//CountQuantity
const minusBtnEl = document.querySelector('.product__minus-icon');
const plusBtnEl = document.querySelector('.product__plus-icon');
const quantityNumberEl = document.querySelector('.product__info-quantity-number');
let quantityNumberValue = +quantityNumberEl.textContent;

function minusOneQuantity() {
    if(quantityNumberValue <= 0) {
      return false;
    } else  {
      quantityNumberValue -= 1;
      quantityNumberEl.textContent = quantityNumberValue;
    }
}

function plusOneQuantity() {
    if(quantityNumberValue >= 100) { 
      return false
    } else  {
      quantityNumberValue += 1;
      quantityNumberEl.textContent = quantityNumberValue;
    }
}

minusBtnEl.addEventListener('click', minusOneQuantity);
plusBtnEl.addEventListener('click', plusOneQuantity);

//Lightbox
const rootEl = document.querySelector('html');
const productPreviewBigContEl = document.querySelector('.product__preview-big-cont');
const productPreviewSmallBoxEls = document.querySelectorAll('.product__preview-img-small-box');

productPreviewSmallBoxEls.forEach(productPreviewSmallBoxEl=> {
    productPreviewSmallBoxEl.addEventListener('click', showLightboxPopup);
})

productPreviewBigContEl.addEventListener('click', showLightboxPopup);

function showLightboxPopup() {
  rootEl.classList.add('lightbox');
}

//Close Lightbox

const closeLightboxBtnEl = document.querySelector('.popup__close-btn');

closeLightboxBtnEl.addEventListener('click', closeLightboxPopup);

function closeLightboxPopup() {
  rootEl.classList.remove('lightbox');
}