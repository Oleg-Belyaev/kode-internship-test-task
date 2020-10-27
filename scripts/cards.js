const popupContainer = document.querySelector('.popup');
const cardImageList = Array.from(document.querySelectorAll('.card__image'));
const popupContainerCloseButton = popupContainer.querySelector('.popup__close');
const popupContainerOverlay = popupContainer.querySelector('.popup__overlay');
const popupImage = popupContainer.querySelector('.popup__image');
const popupCaption = popupContainer.querySelector('.popup__caption');

const openPopup = (evt) => {
    evt.classList.add('popup_opened');
}

const closePopup = (evt) => {
    evt.classList.remove('popup_opened');
    popupImage.src = '';
    popupImage.alt = '';
}

cardImageList.forEach((cardImageElement) => {
    cardImageElement.addEventListener('click', () => {
        openPopup(popupContainer);
        popupImage.src = cardImageElement.src;
        popupImage.alt = cardImageElement.alt;
        popupCaption.textContent = cardImageElement.alt;
    });
});

popupContainerCloseButton.addEventListener('click', () => {
    closePopup(popupContainer);
});

popupContainerOverlay.addEventListener('click', () => {
    closePopup(popupContainer);
});