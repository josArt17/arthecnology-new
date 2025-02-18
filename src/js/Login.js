const urlLogin = import.meta.env.VITE_LOGIN_URL;

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
            console.log('Respuesta del servidor:', data);
            if (data.success) {
                console.log('Inicio de sesion exitoso')
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    }
}