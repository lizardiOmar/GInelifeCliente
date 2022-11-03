/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const tokenValido = new Map();
const sendGetTokenRequest = async () => {
    if (localStorage.getItem("idDoctoras")) {
        try {
            const params = new URLSearchParams();
            const headers = {Authorization: localStorage.getItem("token").toString()};
            axios.get('http://localhost:8084/GinelifeAPI/ws/acceso/validarToken/' +
                    localStorage.getItem("idDoctoras").valueOf(), {headers})
                    .then(function (response) {
                        if (response.data != []) {
                            //alert(response.data.token);
                            tokenValido.set('token', response.data.token);
                        } else {
                            localStorage.setItem("token", "0-0-0-0-0-0-0-0-0-0");   
                        }
                    });
        } catch (err) {
// Handle Error Here
            console.error("errores11: " + err);
        }
    } else {
        window.location.href = "/GinelifeCliente/index.html";
    }
};
sendGetTokenRequest();
if (tokenValido.get("token") === "0-0-0-0-0-0-0-0-0-0") {
    window.location.href = "/GinelifeCliente/index.html";
}
