let repartidorS = localStorage.getItem("usuario");
let repartidor = JSON.parse(repartidorS);
let contraseña='';
function renderizarEntregasPendientes() {
    for (let i = 0; i < repartidor.contraseña.length; i++) {
        contraseña += "X";
        
    }
    document.getElementById('nombre').innerHTML=repartidor.nombre;
    document.getElementById('correo').innerHTML=repartidor.correo;
    document.getElementById('contraseña').innerHTML=contraseña;
    document.getElementById('telefono').innerHTML=repartidor.telefono;
}
renderizarEntregasPendientes();