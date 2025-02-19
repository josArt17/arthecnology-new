import '../css/style.css';
import {renderImages, validateInputNumber, sanitizePassword, showToast } from './utils';
import Login from './Login';

const whatsappNumber = document.querySelector('#whatsappNumber');
const password = document.querySelector('#password');
const formLogin = document.querySelector('#loginForm');

whatsappNumber.addEventListener('keyup', function(){
  validateInputNumber(whatsappNumber);
});

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const sanitizedValue = sanitizePassword(password);
  const login = new Login(whatsappNumber.value, sanitizedValue);
  login.init();
});

renderImages();
