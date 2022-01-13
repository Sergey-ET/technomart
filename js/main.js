const cartButton = document.querySelectorAll(".product-button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const cartContinueButton = cartPopup.querySelector(".modal-cart-button");

cartButton.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartContinueButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

const sliderPromoButtonForward = document.querySelector(
  ".promo-slider-button-forward"
);
const sliderPromoButtonBack = document.querySelector(
  ".promo-slider-button-back"
);
const sliderPromoSlideFirst = document.querySelector(".promo-slide-first");
const sliderPromoSlideSecond = document.querySelector(".promo-slide-second");
const sliderPromoPaginationFirst = document.querySelector(
  ".promo-slider-pagination-button-first"
);
const sliderPromoPaginationSecond = document.querySelector(
  ".promo-slider-pagination-button-second"
);

sliderPromoButtonForward.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderPromoSlideFirst.classList.toggle("promo-slide-current");
  sliderPromoSlideSecond.classList.toggle("promo-slide-current");
  sliderPromoPaginationFirst.classList.toggle(
    "promo-slider-pagination-current"
  );
  sliderPromoPaginationSecond.classList.toggle(
    "promo-slider-pagination-current"
  );
});

sliderPromoButtonBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderPromoSlideFirst.classList.toggle("promo-slide-current");
  sliderPromoSlideSecond.classList.toggle("promo-slide-current");
  sliderPromoPaginationFirst.classList.toggle(
    "promo-slider-pagination-current"
  );
  sliderPromoPaginationSecond.classList.toggle(
    "promo-slider-pagination-current"
  );
});

const sliderServicesTabDelivery = document.querySelector(
  ".services-tab-delivery"
);
const sliderServicesTabGuarantee = document.querySelector(
  ".services-tab-guarantee"
);
const sliderServicesTabCredit = document.querySelector(".services-tab-credit");
const sliderServicesContentDelivery = document.querySelector(
  ".service-content-delivery"
);
const sliderServicesContentGuarantee = document.querySelector(
  ".service-content-guarantee"
);
const sliderServicesContentCredit = document.querySelector(
  ".service-content-credit"
);

sliderServicesTabDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderServicesTabCredit.classList.remove("services-tab-active");
  sliderServicesContentCredit.classList.remove("service-content-active");
  sliderServicesTabGuarantee.classList.remove("services-tab-active");
  sliderServicesContentGuarantee.classList.remove("service-content-active");
  sliderServicesTabDelivery.classList.add("services-tab-active");
  sliderServicesContentDelivery.classList.add("service-content-active");
});

sliderServicesTabGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderServicesTabDelivery.classList.remove("services-tab-active");
  sliderServicesContentDelivery.classList.remove("service-content-active");
  sliderServicesTabCredit.classList.remove("services-tab-active");
  sliderServicesContentCredit.classList.remove("service-content-active");
  sliderServicesTabGuarantee.classList.add("services-tab-active");
  sliderServicesContentGuarantee.classList.add("service-content-active");
});

sliderServicesTabCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderServicesTabDelivery.classList.remove("services-tab-active");
  sliderServicesContentDelivery.classList.remove("service-content-active");
  sliderServicesTabGuarantee.classList.remove("services-tab-active");
  sliderServicesContentGuarantee.classList.remove("service-content-active");
  sliderServicesTabCredit.classList.add("services-tab-active");
  sliderServicesContentCredit.classList.add("service-content-active");
});

const feedbackButton = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feedback-input-name");
const feedbackEmail = feedbackPopup.querySelector(".feedback-input-email");
const feedbackMessage = feedbackPopup.querySelector(".feedback-input-message");

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
