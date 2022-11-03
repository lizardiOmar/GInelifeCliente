//https://www.gob.mx/vun/estados?filter[order]=nombre%20ASC
axios.get('https://www.gob.mx/vun/estados?filter[order]=nombre%20ASC').then(function (response) {
    var estados = JSON.parse(JSON.stringify(response.data));
    var selectEstado = document.getElementById('estadoNacimiento');
    estados.forEach(e => {
        //console.log(e.nombre); 
        var option = document.createElement('option');
        option.value = e.nombre;
        option.innerHTML = e.nombre;
        selectEstado.appendChild(option);
    });
});

const msg = document.getElementById('msg');

const inputNombres = document.getElementById('nombres');
const inputApellidoP = document.getElementById('apellidoPaterno');
const inputApellidoM = document.getElementById('apellidoMaterno');
const inputCalle = document.getElementById('calle');
const inputNumero = document.getElementById('numero');
const inputCP = document.getElementById('cp');
const inputEdad = document.getElementById('edad');
const inputDN = document.getElementById('dN');
const inputMN = document.getElementById('mN');
const inputAN = document.getElementById('aN');
const inputEstadoCivil = document.getElementById('estadoCivil');
const inputOcupacion = document.getElementById('ocupacion');
const inputEscolaridad = document.getElementById('escolaridad');
const inputCiudadN = document.getElementById('ciudadN');
const inputEntidadN = document.getElementById('estadoNacimiento');
const inputTelefono = document.getElementById('telefono');
const inputCorreo = document.getElementById('correo');
const inputMunicipio = document.getElementById('municipio');
const inputColonia = document.getElementById('colonia');
var txtMunicipio, txtColonia;
var txtCorreo, txtTelefono;
var txtEntidad, txtCiudad;
var txtEstadoCivil, txtOcupacion, txtEscolaridad;
var txtCalle, txtNumero, txtCP;
var txtNombres, txtApellidoP, txtApellidoM;
var txtEdad, txtDN, txtMN, txtAN, txtFechaN;
function getNombres() {
    txtNombres = inputNombres.value;
}
function getApellidoP() {
    txtApellidoP = inputApellidoP.value;
}
function getApellidoM() {
    txtApellidoM = inputApellidoM.value;
}

function getEdad() {
    if (inputEdad.value < 110 & inputEdad.value > 15) {
        txtEdad = inputEdad.value;
    }
}
function getDN() {
    if (inputDN.value < 32 & inputDN.value > 0) {
        if (inputDN.value < 10) {
            txtDN = '0' + inputDN.value;
        } else {
            txtDN = inputDN.value;
        }
    }
}
function getAN() {
    if (inputAN.value < 2006 & inputAN.value > 1922) {
        txtAN = inputAN.value;
    }
}
function getOcupacion() {
    txtOcupacion = inputOcupacion.value;
}
function getCiudadN() {
    txtCiudad = inputCiudadN.value;
}
function getCorreo() {
    txtCorreo = inputCorreo.value;
}
function getTelefono() {
    txtTelefono = inputTelefono.value;
}
function getMunicipio() {
    txtMunicipio = inputMunicipio.value;
}
function getColonia() {
    txtColonia = inputColonia.value;
}
function getCalle() {
    txtCalle = inputCalle.value;
}
function getNumero() {
    txtNumero = inputNumero.value;
}
function getCP() {
    txtCP = inputCP.value;
}
const btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', registrar);
function registrar() {
    txtEstadoCivil = inputEstadoCivil.options[inputEstadoCivil.selectedIndex].value;
    txtEscolaridad = inputEscolaridad.options[inputEscolaridad.selectedIndex].value;
    txtEntidad = inputEntidadN.options[inputEntidadN.selectedIndex].value;
    txtMN = inputMN.options[inputMN.selectedIndex].value;
    msg.innerHTML = "-";

    if (!txtNombres) {
        msg.innerHTML = "El (los) nombre (s) del paciente son necesarios.";
        inputNombres.focus();
    } else {
        if (!txtApellidoP) {
            msg.innerHTML = "El apellido paterno del paciente es necesario.";
            inputApellidoP.focus();
        } else {
            if (!txtApellidoM) {
                msg.innerHTML =
                        "El apellido materno del paciente es necesario.";
                inputApellidoM.focus();
            } else {

                if (!txtDN) {
                    msg.innerHTML =
                            "El día de nacimiento del paciente es necesario.";
                    inputDN.focus();
                } else {
                    if (!txtAN) {
                        msg.innerHTML =
                                "El año de nacimiento del paciente es necesario.";
                        inputAN.focus();
                    } else {
                        txtFechaN = txtAN + '-' + txtMN + '-' + txtDN;
                        if (!txtOcupacion) {
                            msg.innerHTML =
                                    "La ocupación del paciente es necesario.";
                            inputOcupacion.focus();
                        } else {
                            if (!txtCiudad) {
                                msg.innerHTML =
                                        "La ciudad de nacimiento del paciente es necesaria.";
                                inputCiudadN.focus();
                            } else {
                                if (!txtTelefono) {
                                    msg.innerHTML =
                                            "El número teléfono del paciente es necesario.";
                                    inputTelefono.focus();
                                } else {
                                    if (!txtCorreo) {
                                        msg.innerHTML =
                                                "El correo electrónico del paciente es necesario.";
                                        inputCorreo.focus();
                                    } else {
                                        if (!txtMunicipio) {
                                            msg.innerHTML =
                                                    "El municipio del domicilio del paciente es necesario.";
                                            inputMunicipio.focus();
                                        } else {
                                            if (!txtColonia) {
                                                msg.innerHTML =
                                                        "La colonia del domicilio del paciente es necesaria.";
                                                inputColonia.focus();
                                            } else {
                                                if (!txtCalle) {
                                                    msg.innerHTML =
                                                            "La calle del domicilio del paciente es necesaria.";
                                                    inputCalle.focus();
                                                } else {
                                                    if (!txtNumero) {
                                                        msg.innerHTML =
                                                                "El número del domicilio del paciente es necesario.";
                                                        inputNumero.focus();
                                                    } else {
                                                        if (!txtCP) {
                                                            msg.innerHTML =
                                                                    "El código postal del domicilio del paciente es necesaria.";
                                                            inputCP.focus();
                                                        } else {
                                                            msg.innerHTML =
                                                                    "Registrando paciente.";
                                                            btnRegistrar.disabled
                                                                    = true;
                                                            //
                                                            sendPostRequestNuevoPaciente();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}

const sendPostRequestNuevoPaciente = async () => {
    try {
        const params = new URLSearchParams();
        params.append('nombres', txtNombres);
        params.append('apellidoPaterno', txtApellidoP);
        params.append('apellidoMaterno', txtApellidoM);
        params.append('fechaNacimiento', txtFechaN);
        params.append('estadoCivil', txtEstadoCivil);
        params.append('ocupacion', txtOcupacion);
        params.append('escolaridad', txtEscolaridad);
        params.append('ciudadNacimiento', txtCiudad);
        params.append('entidadNacimiento', txtEntidad);
        params.append('telefono', txtTelefono);
        params.append('correo', txtCorreo);
        params.append('entidad', txtEntidad);
        params.append('municipio', txtMunicipio);
        params.append('colonia', txtColonia);
        params.append('calle', txtCalle);
        params.append('numero', txtNumero);
        params.append('codigoPostal', txtCP);
        params.append('idDoctora', localStorage.getItem("idDoctoras").valueOf());
        const headers = {Authorization: localStorage.getItem("token").toString()};
        const resp = await axios.post(
                'http://localhost:8084/GinelifeAPI/ws/pacientes/nuevoPaciente',
                params, {headers}
        )
                .then(function (response) {
                    console.log(response.data);
                    if (response.data === []) {
                        alert('Error.');
                    } else {
                        alert(response.data.nombres);
                        window.location =
                                "/GinelifeCliente/HTML/paciente.html?idPaciente="
                                + response.data.idPaciente;
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