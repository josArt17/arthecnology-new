const urlLogin = import.meta.env.VITE_LOGIN_URL;
import { showToast } from "./utils";

export default class Login {
    constructor(phoneNumber, password){
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    init(){
        this.validateData(this.phoneNumber, this.password);
    }

    async validateData(phoneNumber, password){
        const formData = {
            phone: phoneNumber,
            password: password,
        };

        fetch(urlLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.replace('/principal/main.html');
            } else {
                showToast(data.message);
            }
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    }
}