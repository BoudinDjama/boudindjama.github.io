

/* for side menu */

function showSidebar(){

    
    document.querySelector('.sidebar').style.display= "flex";
    document.querySelector('.hamburger-menu').style.color ="transparent";
    
}

function hideSidebar(){

    document.querySelector('.sidebar').style.display= "none";
    document.querySelector('.hamburger-menu').style.color = "white";      
        
}

function checkScreenSize(){
    const screenSize = window.innerWidth;
    if(screenSize < 900){
        hideSidebar();
    }

}

window.addEventListener('resize', checkScreenSize)

/* ----------- Keeping track of where we are at with scolling -------------------------*/

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');
var contactform = document.querySelector(".contact"); 
var gtkm = document.querySelector(".about-GetToKnowMe");
var absk = document.querySelector(".about-MySkills");


var resumeIcon = document.getElementById("cv-disabled");
var troubleshooter = document.getElementById("troubleshooter-card");
var agencyCard = document.getElementById("placement-agency-card");
var guessingGame = document.getElementById("guessing-game");



window.onscroll = () => {
    sections.forEach( sec => { 
    let top =window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset +height){
        navLinks.forEach(links => {
            if (links.href.endsWith("#" + id)) { // check if the link matches the section id
                links.classList.add('active'); // add the active class to the matching link
            } else {
                links.classList.remove('active'); // remove the active class from the other links
            }
            if(id === "Contact"){
                DisplayContactForm();    
            }
             
           if (id === 'About') 
           DisplayAboutContent();
           else if(id != 'About')
              HideAboutContent();
          
            
        });
    }
     else   if(top + window.innerHeight >= offset && top < offset + height){ // modified condition
        navLinks.forEach(links => {
         
           if (id === 'About') 
              DisplayAboutContent();
          
            
           else if(id === "Contact")
              DisplayContactForm();
            
            
           else if(id != "Contact")
              HideContactForm();
            
            
        });
    
    
    }
    
});
}
/*  for the About section animation/transition */
function DisplayAboutContent(){
        
        gtkm.style.opacity = 1;
        gtkm.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
        gtkm.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s";
        absk.style.visibility = "visible";
        absk.style.opacity = 1;
        absk.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
        absk.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s";
    
}
function HideAboutContent(){
   
       gtkm.style.visibility = "visible";
       gtkm.style.opacity = 0;
       gtkm.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -80, 0, 0, 1)";
       gtkm.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s";

       absk.style.visibility = "visible";
       absk.style.opacity = 0;
       absk.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 80, 0, 0, 1)";
       absk.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s";
}

//disabling progress
function resumeDisabled(){
    // Create the message container dynamically
    const messageContainer = document.createElement('div');
    messageContainer.className = 'cv-disabled';
    messageContainer.textContent = 'CV disabled';

    // Append the message container to the DOM
    resumeIcon.appendChild(messageContainer);

    // Show the message when the button is disabled
    messageContainer.style.display = 'block';
    setTimeout(() => {
    
    messageContainer.style.display = 'none';    
   
    }, 1000);
}


// Project (in progress) pop up for demo




function DemoInProgress(id){
    
    // Create the message container dynamically
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    messageContainer.textContent = 'Demo coming soon!';

    // Append the message container to the DOM
    if(id == 1)
    troubleshooter.appendChild(messageContainer);

    if(id == 2)
    agencyCard.appendChild(messageContainer);

    if(id == 3)
    guessingGame.appendChild(messageContainer);

    guessingGame
    // Show the message when the button is disabled
    messageContainer.style.display = 'block';
    setTimeout(() => {
    
    messageContainer.style.display = 'none';    
   
    }, 2000);

}


/* Contact section scroll animation/transition */
function DisplayContactForm(){
      contactform.style.visibility = "visible";
      contactform.style.opacity = "1";
      contactform.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)";
      contactform.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s";
}
function HideContactForm(){
      contactform.style.visibility = "visible";
      contactform.style.opacity = "0";
      contactform.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -80, 0, 1)";
      contactform.style.transition = "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s";
}


//Contact form submission
const scriptURL = "https://script.google.com/macros/s/AKfycbwkaeYBDZX_tJmgREX9ildcDSRARQynZ7nR6PJxkGxFFWkqGrgdExgUtagUFOlFAr94jQ/exec";
const submitButton = document.getElementById("submit");
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  submitButton.disabled = true
  submitButton.style.backgroundColor = "grey";
  document.getElementById('loadingSpinner').style.display = 'block';
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => { const submittedPopup = document.createElement("div");

            document.getElementById('loadingSpinner').style.display = 'none';
            submittedPopup.innerHTML = "Thank you! Your form is submitted successfully.";

            submittedPopup.classList.add("submitted-popup");

            document.body.appendChild(submittedPopup);

            setTimeout(() => {

                submittedPopup.remove();

                window.location.reload();
                
            }, 3000);})
    
    
    .catch(error => console.error('Error!', error.message))
  
});

