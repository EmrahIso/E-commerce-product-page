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

//Add and remove items from the list

let cartBoxEl = document.querySelector('.header__user-basket-cont');
const itemBoxEl = document.querySelector('.header__user-basket-box');
const emptyCartHeadingEl = document.querySelector('.header__user-empty-basket-heading')
const addToCartBtnCountEl = document.querySelector('.header__user-cart-button-count')
const addToCartBtnEl = document.querySelector('.product__info-cart-add-button');

function addItem() {
  addToCartBtnCountEl.textContent = quantityNumberValue
  addToCartBtnCountEl.style.cssText = 'padding: 0.15rem 0.5rem;'
  itemBoxEl.classList.add('header__user-basket-box-o')
  emptyCartHeadingEl.style.cssText = 'opacity: 0; pointer-events: none;'
}

addToCartBtnEl.addEventListener('click', addItem);

const removeBtnEl = document.querySelector('.header__user-basket-box-info-item-delete');

function removeCartItems() {
  itemBoxEl.classList.remove('header__user-basket-box-o')
  emptyCartHeadingEl.style.cssText = 'opacity: 1; pointer-events: all;'
}

removeBtnEl.addEventListener('click', removeCartItems);


//Open and close Cart


const cartEl = document.querySelector('.header__user-basket-cont');
const cartBtnEl = document.querySelector('.header__user-cart-button');

function openCart() {
  cartEl.classList.toggle('header__user-basket-cont-open')
}

cartBtnEl.addEventListener('click', openCart);


//Count Checkout

const priceOfProductEl = document.querySelector('.product__info-special-price');
const priceOfProductElValue = priceOfProductEl.textContent;
const priceOfProduct = Number(priceOfProductElValue.split('$')[1]);
const cartPriceCountEl = document.querySelector('.header__user-basket-info-mini-box-price-count');
const cartPriceActualEl = document.querySelector('.header__user-basket-info-mini-box-price-actual-price');


function countCheckout() {
  let actualPrice = priceOfProduct * quantityNumberValue;
  actualPrice = actualPrice.toFixed(2);
  cartPriceCountEl.innerHTML = `${quantityNumberValue}`;
  cartPriceActualEl.innerHTML = `$${actualPrice}`;
  cartPriceActualEl.style.cssText = 'font-weight: 700; color: var(--color-very-dark-blue);'

  quantityNumberValue = 0;
  quantityNumberEl.textContent = '0' ;
}

addToCartBtnEl.addEventListener('click', countCheckout);

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

//Lightbox image slider
const bigImgEls = document.querySelectorAll('.popup__preview-big-img');
const goLeftBtnEl = document.querySelector('.popup__switch-btn--left');
const goRightBtnEl = document.querySelector('.popup__switch-btn--right');
let currentImg = 0;

function goRight() {
  if(currentImg == 3) {
    return currentImg = 0;
  } else {
    return currentImg++;
  }
}

function goLeft() {
  if(currentImg == 0) {
    return currentImg = 3;
  } else {
    return currentImg--;
  }
}

function showImg() {
  for(let i = 0; i < bigImgEls.length; i++) {
    if(i == currentImg) {
      bigImgEls[i].style.display = 'block';
    } else {
      bigImgEls[i].style.display = 'none';
    }
  }
}

showImg();

goRightBtnEl.addEventListener('click', goRight);
goRightBtnEl.addEventListener('click', showImg);
goLeftBtnEl.addEventListener('click', goLeft);
goLeftBtnEl.addEventListener('click', showImg);



