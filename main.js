import {makePassword1} from "./password1.js";
import {makePassword2} from "./password2.js";

const togglePassword = document.getElementById('togglePassword');
const showOrHidePassword = () => {
  const password = document.getElementById('password');
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};
togglePassword.addEventListener('change', showOrHidePassword);

//let first = 'mathematic';
//let second = 'computer';
//let third = 'scanner';

let first = 'sony';
let second = 'hewlett';
let third = 'mercedes';
let password = [];
//let inputPass = getElementById("password").value;
//makePassword1(first, second, third, password);
makePassword2(first, second, third, password);
//console.log(password)
let wordDiv = document.getElementById('word');
let wordPass = document.createElement('h2');
wordPass.textContent = 'We have 3 words: ' + first + " "+ second + " " + third;
wordDiv.append(wordPass);
const userAccess = () => {
    let inputPass = document.getElementById("password").value;
    let getPass = password.join('');
    if(getPass == inputPass) {
        console.log("Welcome");
        let passForm = document.getElementById('passForm');
        passForm.remove();
        let page = document.getElementById('page')
        let welcomeDiv = document.createElement('div');
        let welcomeText = document.createElement('h2');
        welcomeText.textContent = "Password is "+getPass;
        let welcomeImage = document.createElement('img');
        welcomeImage.src = "./welcome.gif"
        page.appendChild(welcomeDiv);
        welcomeDiv.appendChild(welcomeText);
        welcomeDiv.appendChild(welcomeImage);

    } else {
        document.getElementById('passForm').reset();
        const password = document.getElementById('password');
        password.type = 'password';
        let form = document.getElementById('passForm');
        let looserDiv = document.createElement('div');
        let looserText = document.createElement('h2');
        looserText.textContent = "You're loose. Try again";
        let looserImage = document.createElement('img');
        looserImage.src = "./looser.gif"
        form.appendChild(looserDiv);
        looserDiv.appendChild(looserText);
        looserDiv.appendChild(looserImage);
        
    }
}; 
let button = document.getElementById('button');
button.addEventListener('click',userAccess);
