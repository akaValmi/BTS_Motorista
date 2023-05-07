var motorista;
 var entregas; 
 var ordenesDisponibles = [];
 var ordenesPendientes = [];
 var ordenesRealizdas = [];
 let repartidorS = localStorage.getItem("usuario");
 let repartidor = JSON.parse(repartidorS);
 let nuevaInfo;
renderizarEntregas();
  
 async function renderizarEntregasPendientes() {
    ordenesPendientes = [];
	const respuesta = await fetch("http://127.0.0.1:3002/repartidores", {
		method: "get",
	});
	users = await respuesta.json();
    users.forEach(usuario => {
        if (usuario._id ==repartidor._id) {
            motorista = usuario;
        }
    });  
    nuevaInfo = motorista.ordenesPendientes;
    nuevaInfo.forEach(element => {
        if (element.estadoOrden != "REALIZADA" ) {
            ordenesPendientes.push(element);        
    }
    });
    document.getElementById('pendientes').innerHTML='';
    ordenesPendientes.forEach((entrega, id) => {
        let productos='';
        /*    entrega.productos.forEach((producto, i) => {
                if (i>0) {
                    productos += ", "
                }
                productos += producto.valor+" "+producto.producto.nombreProducto;
            });*/
    document.getElementById('pendientes').innerHTML += 
    `<div type="button" class="contentEntregas">
        <div class="tituloEntregas">Entrega</div>
        <div class="entrega">
            <div class="infoEntrega">
                <p>Productos: ${productos} </p>
                <p>Direccion: ${entrega.direccion} </p>
                <p>Cliente: ${entrega.nombreCliente} </p>
                <p>Monto a pagar:  L.${entrega.montoPagar} </p>
                <p>Estado de la orden:  ${entrega.estadoOrden} </p>
        </div>
        <div class = "botonesOrden"> 
        <button class="botonOrdenes" onclick="ordenCamino(${id})">En camino</button>
        <button class="botonOrdenes" onclick="ordenOrigen(${id})"> En el origen</button>
        <button class="botonOrdenes" onclick="ordenDestino(${id})">destino</button>
        </div>
        <button class="botonOrdenes" onclick="ordenRealizada(${id})"><i class="fa-solid fa-check"></i>Entregado</button>
            </div> 
    </div>`;
});
        document.getElementById('ordenesDisponibles').style.display = "none";
        document.getElementById('entregasPendientes').style.display = "block";
        document.getElementById('entregasRealizadas').style.display = "none";
}

     async function renderizarEntregas() {
        ordenesDisponibles = [];
        const response = await fetch('http://localhost:3002/ordenes');
        if (!response.ok) {
        throw new Error('Error al obtener las ordenes');
        }
        entregas = await response.json();  
        entregas.forEach(element => {
            if (element.estadoOrden == "PENDIENTE" ) {
                ordenesDisponibles.push(element);        
        }
        });
        
        document.getElementById('centrarEntregas').innerHTML = '';
        ordenesDisponibles.forEach((entrega, id ) => {
            let productos='';
            /*entrega.productos.forEach((producto, i) => {
                if (i>0) {
                    productos += ", "
                }
                productos += producto.valor+" "+producto.producto.nombreProducto;
            });*/
            
        document.getElementById('centrarEntregas').innerHTML += 
        `<div type="button" class="contentEntregas">
            <div class="tituloEntregas">Entrega</div>
            <div class="entrega">
                <div class="infoEntrega">
                    <p>Productos: ${productos} </p>
                    <p>Direccion: ${entrega.direccion} </p>
                    <p>Cliente: ${entrega.nombreCliente} </p>
                    <p>Monto a pagar:  L.${entrega.montoPagar} </p>
                </div>
            <button class="botonOrdenes" onclick="ordenTomada(${id})" ><i class="fa-regular fa-square-plus" ></i>  Tomar orden</button>
                </div> 
        </div>`;
    });
        document.getElementById('ordenesDisponibles').style.display = "block";
        document.getElementById('entregasPendientes').style.display = "none";
        document.getElementById('entregasRealizadas').style.display = "none";
    }
   
    
    async function renderizarEntregasRealizadas() {
        ordenesRealizdas = [];
        const respuesta = await fetch("http://127.0.0.1:3002/repartidores", {
		method: "get",
	});
        users = await respuesta.json();
        users.forEach(usuario => {
            if (usuario._id ==repartidor._id) {
                motorista = usuario;
            }
        });  
        nuevaInfo = motorista.ordenesPendientes;
        nuevaInfo.forEach(element => {
            if (element.estadoOrden == "REALIZADA" ) {
                ordenesRealizdas.push(element);        
    }
    });
        document.getElementById('centrarRealizadas').innerHTML = '';
        ordenesRealizdas.forEach(entrega => {
           let productos='';
           /* entrega.productos.forEach((producto, i) => {
                if (i>0) {
                    productos += ", "
                }
                productos += producto.valor+" "+producto.producto.nombreProducto;
            });*/
        document.getElementById('centrarRealizadas').innerHTML += 
        `<div type="button" class="contentEntregas">
            <div class="tituloEntregas">Entrega</div>
                <div class="entrega">
                <div class="infoEntrega">
                <p>Productos: ${productos} </p>
                <p>Direccion: ${entrega.direccion} </p>
                <p>Cliente: ${entrega.nombreCliente} </p>
                <p>Monto a pagar:  L.${entrega.montoPagar} </p>
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
    async function ordenTomada(id) {
        let idOrden =  ordenesDisponibles[id]._id;
        let repartidorId = repartidor._id;
        console.log(idOrden, repartidorId);
        const actualizarRepartidor = async () => {
            const response = await fetch("http://localhost:3002/repartidores/actualizarRepartidor", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ idRepartidor: repartidorId, idOrden }),
            });
            if (!response.ok) {
              throw new Error("Error al actualizar el repartidor");
            }
            alert("La orden ha sido asignada al repartidor correctamente");
          };
        
          actualizarRepartidor().catch((error) => {
            console.error(error);
            alert("Error al asignar la orden al repartidor");
          });
          let estadoOrden = "TOMADA";
            const response  = await fetch(`http://localhost:3002/ordenes/${idOrden}/estadoOrden`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      estadoOrden: estadoOrden,
                    }),
                  });
                  const ressJSON = await response.json();
                  console.log(`Estado de la orden realizada`, ressJSON);


        renderizarEntregas();
    }

    async function ordenRealizada(id) {
        let orden =  ordenesPendientes[id]._id;
        let repartidorId = repartidor._id;
        console.log(orden, repartidorId);
        let estadoOrden = "REALIZADA";
        const response  = await fetch(`http://localhost:3002/ordenes/${orden}/estadoOrden`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      estadoOrden: estadoOrden,
                    }),
                  });
                  const ressJSON = await response.json();
                  console.log(`Estado de la orden realizada`, ressJSON);


        renderizarEntregasPendientes();
    }
    async function ordenCamino(id) {
        let orden =  ordenesPendientes[id]._id;
        let repartidorId = repartidor._id;
        console.log(orden, repartidorId);
        let estadoOrden = "EN CAMINO";
        const response  = await fetch(`http://localhost:3002/ordenes/${orden}/estadoOrden`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      estadoOrden: estadoOrden,
                    }),
                  });
                  const ressJSON = await response.json();
                  console.log(`Estado de la orden realizada`, ressJSON);


        renderizarEntregasPendientes();
    }
    async function ordenOrigen(id) {
        let orden =  ordenesPendientes[id]._id;
        let repartidorId = repartidor._id;
        console.log(orden, repartidorId);
        let estadoOrden = "EN EL ORIGEN";
        const response  = await fetch(`http://localhost:3002/ordenes/${orden}/estadoOrden`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      estadoOrden: estadoOrden,
                    }),
                  });
                  const ressJSON = await response.json();
                  console.log(`Estado de la orden realizada`, ressJSON);


        renderizarEntregasPendientes();
    }
    async function ordenDestino(id) {
        let orden =  ordenesPendientes[id]._id;
        let repartidorId = repartidor._id;
        console.log(orden, repartidorId);
        let estadoOrden = "EN EL DESTINO";
        const response  = await fetch(`http://localhost:3002/ordenes/${orden}/estadoOrden`, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      estadoOrden: estadoOrden,
                    }),
                  });
                  const ressJSON = await response.json();
                  console.log(`Estado de la orden realizada`, ressJSON);


        renderizarEntregasPendientes();
    }