let Usuarios = []

function Registro(){

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let cel = document.getElementById("cel").value
    let correo = document.getElementById("correo").value
    let observacion = document.getElementById("observacion").value

    const usuario = {
        nombre : nombre,
        apellido : apellido,
        cel : cel,
        correo : correo,
        observacion : observacion
    }

    Usuarios.push(usuario)

    localStorage.setItem('Usuario', JSON.stringify(Usuarios))

}