// Dark Mode
function toggleMode(){
  document.body.classList.toggle("light");
}

// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", ()=>{
  menu.classList.toggle("active");
});

// Typing Effect
const words=["Web Developer","Frontend Enthusiast","JavaScript Learner"];
let i=0,j=0,isDeleting=false;
const typing=document.querySelector(".typing");

function type(){
  const current=words[i];
  typing.textContent=current.substring(0,j);

  if(!isDeleting){
    j++;
    if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
  }else{
    j--;
    if(j===0){isDeleting=false;i=(i+1)%words.length;}
  }
  setTimeout(type,100);
}
type();

// Animate Skills
const bars=document.querySelectorAll(".progress-bar");
window.addEventListener("scroll",()=>{
  const trigger=window.innerHeight*0.8;
  bars.forEach(bar=>{
    const top=bar.getBoundingClientRect().top;
    if(top<trigger){
      bar.style.width=bar.dataset.width;
    }
  });
});

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const name=document.getElementById("name");
  const email=document.getElementById("email");
  const message=document.getElementById("message");
  const formMessage=document.getElementById("form-message");

  let valid=true;
  formMessage.style.color="red";
  formMessage.textContent="";
  [name,email,message].forEach(f=>f.style.border="none");

  if(name.value.trim().length<3){
    name.style.border="2px solid red";
    formMessage.textContent="Name must be at least 3 characters.";
    valid=false;
  }

  const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.value.match(emailPattern)){
    email.style.border="2px solid red";
    formMessage.textContent="Enter a valid email.";
    valid=false;
  }

  if(message.value.trim().length<10){
    message.style.border="2px solid red";
    formMessage.textContent="Message must be at least 10 characters.";
    valid=false;
  }

  if(valid){
    formMessage.style.color="lightgreen";
    formMessage.textContent="Message Sent Successfully!";
    name.value="";
    email.value="";
    message.value="";
  }
});
