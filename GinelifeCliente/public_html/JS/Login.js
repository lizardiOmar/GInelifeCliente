/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var inputCorreo = document.getElementById('correo');
var inputClave = document.getElementById('clave');
const datos = new Map();
document.getElementById('acceder').addEventListener('click', acceder);

const sendPostRequest = async () => {
    try {
        const params = new URLSearchParams();
        params.append('correo', inputCorreo.value);
        params.append('clave', inputClave.value);
        const resp = await axios.post(
                'http://localhost:8084/GinelifeAPI/ws/acceso/login',
                params)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.nombres === '01-01') {
                        alert(response.data.apellidoPaterno);
                    } else {
                        if (response.data.nombres === '01-02') {
                            alert(response.data.apellidoPaterno);
                        } else {
                            if (response.data.nombres === '01-03') {
                                alert(response.data.apellidoPaterno);
                            } else {
                                if (response.data.nombres === '01-04') {
                                    alert(response.data.apellidoPaterno);
                                } else {
                                    if (response.data.nombres === '01-05') {
                                        alert(response.data.apellidoPaterno);
                                    } else {
                                        datos.set('token', response.data.token);
                                        datos.set('idDoctoras',
                                                response.data.idDoctoras);
                                        localStorage.setItem("token",
                                                datos.get('token'));
                                        localStorage.setItem("idDoctoras",
                                                datos.get('idDoctoras'));
                                        window.location =
                                                "/GinelifeCliente/HTML/" + 
                                                "dashboard.html";
                                    }
                                }
                            }

                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
function acceder(e) {
    if (inputCorreo.value) {
        if (inputClave.value) {
            sendPostRequest();
        } else {
            alert("Por favor, escriba  su clave.");
        }
    } else {
        alert("Por favor, escriba  un correo electrónico.");
    }
}
