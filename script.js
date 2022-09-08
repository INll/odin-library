// Control popup opening and closing
// Select all elements associated with opening popup and group them to this const
const openPopupButtons = document.querySelectorAll('[data-button-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const thePopup = document.querySelector('#popup');
const overlay = document.querySelector('div.overlay');

let readButtons = document.querySelectorAll('[data-read-button]');
let deleteButtons = document.querySelectorAll('[data-delete-button]');

const imageButton = document.querySelector('[data-image-selection');

// Disable Choose File button as it's not supported atm
imageButton.addEventListener('click', e => {
  e.preventDefault();
})

let myLibrary = [];

function Book(title, author, page, date, read, abstract) {
  this.title = title
  this.author = author
  this.page = page
  this.date = date
  this.read = read
  this.abstract = abstract
}

function addBookToLibrary(newBookObject) {
  myLibrary.push(newBookObject);
}

// Reload once a book has been added or deleted
// For each book, check if myLibrary[index].read is congurous with read status
function refreshLibrary(){
  myLibrary.forEach(book => {
    // Get last object in myLibrary

    // Render and add card HTML elements with object values
  })
  // Compare
}

// Delete book in myLibrary based on given index
function deleteBook(index){
  myLibrary.splice(index, 1);
}             

// Return book index in myLibrary based on given book name
function findBook(bookName){
  const isMatchedBookName = (e) => e == bookName; // Testing function, checks if looped e has same name
  return myLibrary.findIndex(isMatchedBookName);
}

function toggleRead(index){
  if (myLibrary[index].read == false){
    myLibrary[index].read = true;
  } else {
    myLibrary[index].read = false;
  } // Look for title tag and traverse to (un)toggle READ UI element
  const titleTag = document
}

// Parse and add new book details to replace placeholders in a hidden card template, then clone and append it
function addNewBookToHTML(formData){
  // Only template is wrapped in a original-template wrapper
  const cardTemplate = document.querySelector('.original-template-wrapper>[data-template-parentNode]');
  const mainDisplayWrapper = document.querySelector('.main-display-wrapper');
  // Select all .placeholders the template
  const cardTemplateDetails = document.querySelectorAll('.original-template-wrapper .placeholder');
  // For each of the .placeholder, change its innerText to each of the placeholder in formData
  cardTemplateDetails.forEach((placeholderElement, index) => {
    const info = formData[index];
    // Except for read? value
    if (info == true || info == false){
        const card = document.querySelector('.original-template-wrapper [data-book-card]');
        // Change class to either contain read or do not contain
        card.className = info ? 'card read' : 'card';
        return; // Skip to next forEach item
      }
    placeholderElement.innerHTML = info;
  })
  mainDisplayWrapper.append(cardTemplate.cloneNode(true));
  // Update nodeList containing all read and delete buttons
  readButtons = document.querySelectorAll('[data-read-button]');
  deleteButtons = document.querySelectorAll('[data-delete-button]');
  prepareNewButtons(readButtons, deleteButtons);
}

// Refresh nodeLists containing buttons and attach eventListerner to them
function prepareNewButtons(readButtons, deleteButtons){
  console.log(readButtons);
  console.log(deleteButtons);
  // Handle delete buttons
  deleteButtons.forEach(button => {
    button.addEventListener('click', e => {
      let bookName = e.target.parentNode.parentNode.parentNode.childNodes[1].innerHTML;
      const cardElement = e.target.parentNode.parentNode.parentNode.parentNode;
      cardElement.remove();
      // deleteBook(findBook(bookName));
    })
  })
  // Handle read buttons
  readButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('[data-book-card]');
      toggleReadTag(card);
      // updateLibraryReadStatus(card);  // Update read status in myLibrary;
    })
  })
}

deleteButtons.forEach(button => {
  button.addEventListener('click', e => {
    let bookName = e.target.parentNode.parentNode.parentNode.childNodes[1].innerHTML;
    const cardElement = e.target.parentNode.parentNode.parentNode.parentNode;
    cardElement.remove();
    // deleteBook(findBook(bookName));
  })
})

// Read form input and add newly constructed object into library
// then clear inputs and close popup
const form = document.querySelector('[data-popup-form]');
form.addEventListener('submit', e => {
  e.preventDefault();
  // File upload is not supported hence it does not have the data-is-valid-input attribute in index.html
  const inputs = document.querySelectorAll('[data-popup-form]>ul>li>[data-is-valid-input]');
  let formData = [];
  // For each form input, read its value and push into formData
  inputs.forEach(input => {
    if(input.type == 'checkbox') {
        formData.push(input.checked);
      } else {
        formData.push(input.value);
      }
    })
  // Since formData is structually identical to the required input arguments of the constructor
  // spread operator can be used to easily pass formData into Book
  const newBookObject = new Book(...formData);
  addBookToLibrary(newBookObject);
  closePopup(form.closest('#popup'));
  document.querySelector('[data-popup-form').reset();
  addNewBookToHTML(formData);  
  // refreshLibrary();  // 
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
    toggleReadTag(card);
    // updateLibraryReadStatus(card);  // Update read status in myLibrary;
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

function toggleReadTag(cardItem) {
  if (cardItem == null) return;
  else if (cardItem.classList.contains('read')) {
    cardItem.classList.remove('read');
  } else {
    cardItem.classList.add('read');
  }
}

// Get ADD A BOOK popup form data after submission