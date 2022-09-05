// Control popup opening and closing
// Select all elements associated with opening popup and group them to this const
const openPopupButtons = document.querySelectorAll('[data-button-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const thePopup = document.querySelector('#popup');
const overlay = document.querySelector('div.overlay');

const readButtons = document.querySelectorAll('[data-read-button]');
const deleteButtons = document.querySelectorAll('[data-delete-button]');

const imageButton = document.querySelector('[data-image-selection');

// Disable Choose File button as it's not supported atm
imageButton.addEventListener('click', e => {
  e.preventDefault();
})

// Read form input and add newly constructed object into library
const form = document.querySelector('[data-popup-form]');
form.addEventListener('submit', e => {
  // readFormData(e);
  const title = document.getElementById(title).value;
  const author = document.getElementById(author).value;
  const noOfPages = document.getElementById(pageNo).value;
  const abstract = document.getElementById(author).value;
  const read = document.getElementById(confirmRead).value;
  const newBookObject = new Book(title, author, noOfPages, abstract, read);
  addBookToLibrary(newBookObject);
  e.preventDefault();
})

// The idea is to first select all buttons that can open a popup, which are
// identified with the data- attribute. 

// Then, loop though them using .forEach() and attach an eventListener and
// listen for click events.

// When a click happens, read the button-target data attribute which stors
// the id of the popup element. 

// Finally, pass its id to openPopup() to add an 'active' class to activate.

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

// Get ADD A BOOK popup form data after submission

let myLibrary = [];

function Book(title, author, page, date, abstract, read) {
  this.title = title
  this.author = author
  this.page = page
  this.date = date
  this.abstract = abstract
  this.read = read
}

function addBookToLibrary(newBookObject) {
  myLibrary.push(newBookObject);
  console.log(myLibrary);
}