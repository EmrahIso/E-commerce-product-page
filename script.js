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

//Count Checkout

const priceOfProductEl = document.querySelector('.product__info-special-price');
const priceOfProductElValue = priceOfProductEl.textContent;
const priceOfProduct = Number(priceOfProductElValue.split('$')[1]);
const cartPriceCountEl = document.querySelector('.header__user-basket-info-mini-box-price-count');
const cartPriceActualEl = document.querySelector('.header__user-basket-info-mini-box-price-actual-price');

const addToCardBtnEl = document.querySelector('.product__info-cart-add-button');

function countCheckout() {
  let actualPrice = priceOfProduct * quantityNumberValue;
  actualPrice = actualPrice.toFixed(2);
  cartPriceCountEl.innerHTML = `${quantityNumberValue}`;
  cartPriceActualEl.innerHTML = `$${actualPrice}`;
  cartPriceActualEl.style.cssText = 'font-weight: 700; color: var(--color-very-dark-blue);'

  quantityNumberValue = 0;
  quantityNumberEl.textContent = '0' ;
}

//Adding items to the list

addToCardBtnEl.addEventListener('click', countCheckout);

let cartBoxEl = document.querySelector('.header__user-basket-cont');


const removeBtnEl = document.querySelector('.header__user-basket-box-info-item-delete');

function removeCartItems() {
  console.log('removed');
}

removeBtnEl.addEventListener('click', removeCartItems);

//Open and close Cart

const cartBtnEl = document.querySelector('.header__user-cart-button');
const cartEl = document.querySelector('.header__user-basket-cont');
const bodyEl = document.querySelector('body')

function closeCart() {
  if('header__user-basket-cont-open' in cartEl.classList) {
    console.log('yes')
  } 
}

function openCart() {
  cartEl.classList.add('header__user-basket-cont-open')
}

if('header__user-basket-cont-open' in cartEl.classList) {
  console.log('yes')
  console.log(cartEl.classList)
} else {
  console.log('No')
  console.log(cartEl.classList)
}

cartBtnEl.addEventListener('click', openCart);


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



