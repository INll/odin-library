// Control popup opening and closing
// Select all elements associated with opening popup and group them to this const
const openPopupButtons = document.querySelectorAll('[data-button-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const thePopup = document.querySelector('#popup');
const overlay = document.querySelector('div.overlay');

const readButtons = document.querySelectorAll('[data-read-button]');
const deleteButtons = document.querySelectorAll('[data-delete-button]');



openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.buttonTarget);
    openPopup(popup);  // Call function to open up the popup
  })
})

closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('#popup');
    closePopup(popup);  // Call function to open up the popup
  })
})

// Clicking overlay closes popup
overlay.addEventListener('click', () => {
  if (thePopup.classList.contains('active')) {
    closePopup(thePopup);
  } return;
})


// Add '.read' class to closest card
readButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('[data-book-card]');
    console.log(card);
    tagHandle(card);
  })
})

function openPopup(popupItem) {
  if (popupItem == null) return;
  popupItem.classList.add('active');
  overlay.classList.add('active');
}

function closePopup(popupItem) {
  if (popupItem == null) return;
  popupItem.classList.remove('active');
  overlay.classList.remove('active');
}

function tagHandle(cardItem) {
  if (cardItem == null) return;
  else if (cardItem.classList.contains('read')) {
    cardItem.classList.remove('read');
  } else {
    cardItem.classList.add('read');
  }
}

let myLibrary = [];

function Book(title, author, date, abstract) {
  this.title = title
  this.author = author
  this.date = date
  this.abstract = abstract
}

// function addBookToLibrary() {
//   return;
// }