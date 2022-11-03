/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", function (event) {
    //Validando token...(Animación)
    
});
document.onreadystatechange = function (e)
{
    if (localStorage.getItem("token") === "0-0-0-0-0-0-0-0-0-0") {
        window.location.href = "/GinelifeCliente/index.html";
    }
};
document.getElementById('salir').addEventListener('click', salir);

const sendPostRequest = async () => {
    try {
        const params = new URLSearchParams();
        params.append('idDoctoras', localStorage.getItem("idDoctoras").valueOf());
        params.append('token', localStorage.getItem("token").toString());
        axios.post('http://localhost:8084/GinelifeAPI/ws/acceso/logout', params)
                .then(function (response) {
                    localStorage.removeItem("idDoctoras");
                    localStorage.setItem("token", response.data.token);
                    console.log(response.data);
                    alert('Saliendo.');
                    window.location.href = "/GinelifeCliente/index.html";
                });
    } catch (err) {
        // Handle Error Here
        console.error("errores11: " + err);
    }
};
function salir(e) {
    sendPostRequest();
}


