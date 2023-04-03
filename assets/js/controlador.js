var motorista = [
    {
        Nombre:"vincent",
        Apellido:"Van Gogh",
        Correo :"vangogh@gmail.com",
        Contraseña:"******", 
        Telefono:"+504 9358-4254"
    }
    ]
 var entregas = [
    {
        Productos:"Pizza grande de peperoni.",
        Direccion:"Tegucigalpa",
        Cliente:"Jungkook",
        MontoPagar:"300"

    }
 ]   
 function renderizarEntregasPendientes() {
    document.getElementById('pendientes').innerHTML='';
    entregas.forEach(entrega => {
    document.getElementById('pendientes').innerHTML += 
    `<div type="button" class="contentEntregas">
        <div class="tituloEntregas">Entrega</div>
        <div class="entrega">
            <div class="infoEntrega">
                <p>Productos: ${entrega.Productos} </p>
                <p>Direccion: ${entrega.Direccion} </p>
                <p>Cliente: ${entrega.Cliente} </p>
                <p>Monto a pagar:  L.${entrega.MontoPagar} </p>
            </div>
        <button class="botonOrdenes" ><i class="fa-solid fa-check"></i> Entregado</button>
            </div> 
    </div>`;
});
        document.getElementById('ordenesDisponibles').style.display = "none";
        document.getElementById('entregasPendientes').style.display = "block";
        document.getElementById('entregasRealizadas').style.display = "none";
}

    function renderizarEntregas() {
        document.getElementById('centrarEntregas').innerHTML = '';
        entregas.forEach(entrega => {
        document.getElementById('centrarEntregas').innerHTML += 
        `<div type="button" class="contentEntregas">
            <div class="tituloEntregas">Entrega</div>
            <div class="entrega">
                <div class="infoEntrega">
                    <p>Productos: ${entrega.Productos} </p>
                    <p>Direccion: ${entrega.Direccion} </p>
                    <p>Cliente: ${entrega.Cliente} </p>
                    <p>Monto a pagar:  L.${entrega.MontoPagar} </p>
                </div>
            <button class="botonOrdenes" ><i class="fa-regular fa-square-plus"></i>  Tomar orden</button>
                </div> 
        </div>`;
    });
        document.getElementById('ordenesDisponibles').style.display = "block";
        document.getElementById('entregasPendientes').style.display = "none";
        document.getElementById('entregasRealizadas').style.display = "none";
    }
    renderizarEntregas()
    
    function renderizarEntregasRealizadas() {
        document.getElementById('centrarRealizadas').innerHTML = '';
        entregas.forEach(entrega => {
        document.getElementById('centrarRealizadas').innerHTML += 
        `<div type="button" class="contentEntregas">
            <div class="tituloEntregas">Entrega</div>
            <div class="entrega">
                <div class="infoEntrega">
                    <p>Productos: ${entrega.Productos} </p>
                    <p>Direccion: ${entrega.Direccion} </p>
                    <p>Cliente: ${entrega.Cliente} </p>
                    <p>Monto a pagar:  L.${entrega.MontoPagar} </p>
                </div>
                <button class="botonOrdenes" style="background-color: #fff; color:#0C1A26;" ><i class="fa-solid fa-check"></i> Entregado</button>
                </div> 
        </div>`;
    });
        document.getElementById('ordenesDisponibles').style.display = "none";
        document.getElementById('entregasPendientes').style.display = "none";
        document.getElementById('entregasRealizadas').style.display = "block";
    }
    function renderizarPerfil() {
        
        location.href='perfil.html'
    }