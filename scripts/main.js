//Get the navbar
const primaryNav = document.querySelector(".primary-navigation");
//Get the mobile navbar
const navToggle = document.querySelector(".mobile-nav-toggle");
//Get the modal
const reading = document.getElementById("reading-modal");
const writing = document.getElementById("writing-modal");
const listening = document.getElementById("listening-modal");
const conversation = document.getElementById("conversation-modal");
const grammar = document.getElementById("grammar-modal");
const vocabulary = document.getElementById("vocabulary-modal");

// Get the button that opens the modal
const readingBtn = document.getElementById("reading-text");
const writingBtn = document.getElementById("writing-text");
const listeningBtn = document.getElementById("listening-text");
const conversationBtn = document.getElementById("conversation-text");
const grammarBtn = document.getElementById("grammar-text");
const vocabularyBtn = document.getElementById("vocabulary-text");

// Get the <span> element that closes the modal
const readingSpan = document.getElementById("reading-close");
const writingSpan = document.getElementById("writing-close");
const listeningSpan = document.getElementById("listening-close");
const conversationSpan = document.getElementById("conversation-close");
const grammarSpan = document.getElementById("grammar-close");
const vocabularySpan = document.getElementById("vocabulary-close");


navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(visibility);
});




// When the user clicks the button, open the modal 
writingBtn.onclick = function() {
  writing.style.display = "block";
}
readingBtn.onclick = function() {
  reading.style.display = "block";
}
listeningBtn.onclick = function() {
  listening.style.display = "block";
}
conversationBtn.onclick = function() {
  conversation.style.display = "block";
}
grammarBtn.onclick = function() {
  grammar.style.display = "block";
}
vocabularyBtn.onclick = function() {
  vocabulary.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
writingSpan.onclick = function() {
  writing.style.display = "none";
}
readingSpan.onclick = function() {
  reading.style.display = "none";
}
listeningSpan.onclick = function() {
  listening.style.display = "none";
}
conversationSpan.onclick = function() {
  conversation.style.display = "none";
}
grammarSpan.onclick = function() {
  grammar.style.display = "none";
}
vocabularySpan.onclick = function() {
  vocabulary.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == writing) {
    writing.style.display = "none";
  }
  if(event.target == reading) {
    reading.style.display = "none";
  } 
  if(event.target == listening) {
    listening.style.display = "none";
  }
  if(event.target == conversation) {
    conversation.style.display = "none";
  }
  if(event.target == grammar) {
    grammar.style.display = "none";
  }
  if(event.target == vocabulary) {
    vocabulary.style.display = "none";
  }
}