

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

/* ----------- code from the office -------------------------*/

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');
var contactform = document.querySelector(".contact"); 
var gtkm = document.querySelector(".about-GetToKnowMe");
var absk = document.querySelector(".about-MySkills");
           
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
/*  for the About section transition */
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




/* for the contact form */
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
/*test*/
function sendEmail() {

    const name = document.querySelector('input[name="name"]').value;

    const email = document.querySelector('input[name="email"]').value;

    const subject = document.querySelector('input[name="subject"]').value;

    const message = document.querySelector('textarea[name="message"]').value;

    const apiKey = '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';



    fetch('https://api.sendgrid.com/v3/mail/send', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

            Authorization: `Bearer ${apiKey}`,

        },

        body: JSON.stringify({

            personalizations: [

                {

                    to: [

                        {

                            email: 'your-email@example.com',

                        },

                    ],

                    subject: subject,

                },

            ],

            from: {

                email: email,

                name: name,

            },

            content: [

                {

                    type: 'text/plain',

                    value: message,

                },

            ],

        }),

    })

        .then((response) => {

            if (response.ok) {

                alert('Email sent successfully!');

            } else {

                response.json().then((data) => {

                    console.error(data.errors);

                    alert('Failed to send email.');

                });

            }

        })

        .catch((error) => {

            console.error(error);

            alert('Failed to send email.');

        });

}

//for contact form
/*const scriptURL = "https://script.google.com/macros/s/AKfycbwkaeYBDZX_tJmgREX9ildcDSRARQynZ7nR6PJxkGxFFWkqGrgdExgUtagUFOlFAr94jQ/exec";

const form = document.getElementById("myForm");

const submitButton = document.getElementById("submit");

 

form?.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitButton.disabled = true;

    try {

        const response = await fetch(scriptURL, { method: "POST", body: new FormData(form) });

        if (response.ok) {

            const submittedPopup = document.createElement("div");

            submittedPopup.innerHTML = "Thank you! Your form is submitted successfully.";

            submittedPopup.classList.add("submitted-popup");

            document.body.appendChild(submittedPopup);

            setTimeout(() => {

                submittedPopup.remove();

                window.location.reload();

            }, 3000);

        } else {

            throw new Error("Network response was not ok.");

        }

    } catch (error) {

        console.error("Error!", error.message);

    } finally {

        submitButton.disabled = false;

    }

});*/
const scriptURL = "https://script.google.com/macros/s/AKfycbwkaeYBDZX_tJmgREX9ildcDSRARQynZ7nR6PJxkGxFFWkqGrgdExgUtagUFOlFAr94jQ/exec";
const submitButton = document.getElementById("submit");
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  submitButton.disabled = true
  submitButton.style.backgroundColor = "grey";
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => { const submittedPopup = document.createElement("div");

            submittedPopup.innerHTML = "Thank you! Your form is submitted successfully.";

            submittedPopup.classList.add("submitted-popup");

            document.body.appendChild(submittedPopup);

            setTimeout(() => {

                submittedPopup.remove();

                window.location.reload();
                
            }, 3000);})
    
    
    .catch(error => console.error('Error!', error.message))
  
});