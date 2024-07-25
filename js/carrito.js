let carrito = JSON.parse (localStorage.getItem ('carrito')) || [];

const productoContenedor = document.getElementById('producto-contenedor');
productoContenedor.addEventListener ('click', (event) =>  {
    if (event.target.classList.contains ('agregar')){

        validarProductoCarrito(event.target.id);
    }
});


const validarProductoCarrito = (productoId) => {
    const productoRepetido = carrito.some ((producto) => producto.id == productoId);

    if (productoRepetido) {
        const producto = carrito.find((producto) => producto.id == productoId);
        producto.cantidad++;

       const cantidad = document.getElementById(`cantidad${producto.id}`);
       cantidad.textContent = `cantidad:${producto.cantidad}`;

       actualizarTotalCarrito(carrito);

    }else{
        const producto = productos.find ((producto)=> producto.id == productoId);
        carrito.push(producto);
        
        pintarProductosCarrito(producto);

        actualizarTotalCarrito(carrito);

    }
};

const pintarProductosCarrito = (producto) => {
    const modalBody = document.querySelector ('.modal-body');
    const div = document.createElement('div');

    div.innerHTML += `
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <p id=cantidad${producto.id}>cantidad ${producto.cantidad}</p>
    <button class="botonEliminar" value="${producto.id}">Eliminar producto</button>
     
    `
     modalBody.appendChild(div);

};

//}
//const productosEnCarrito = [];

//function agregarAlCarrito(e){

    //const idBoton = e.current.id;
    //const productoAgregado = productos.find(producto => producto.id === idBoton );

  //  productosEnCarrito.push(productoAgregado);
//}

const eliminarProductoCarrito = (productoId) => {

    const productoIndex = carrito.findIndex((producto)=> producto.id == productoId);
  carrito[productoIndex].cantidad === 1
     ? carrito.splice(productoIndex, 1)
     : carrito[productoIndex].cantidad--
    
pintarCarrito (carrito);
actualizarTotalCarrito(carrito);

};

const pintarCarrito = (carrito) => {
    const modalBody = document.querySelector ('.modal-body');
  
    modalBody.innerHTML = '';
  
    carrito.forEach(producto => {
      const div = document.createElement('div');
      
  
      div.innerHTML += `
      <p>${producto.nombre}</p>
      <p>$${producto.precio}</p>
      <p id=cantidad${producto.id}>cantidad ${producto.cantidad}</p>
      <button class="botonEliminar" value="${producto.id}">Eliminar producto</button>
       
      `
       modalBody.appendChild(div);
  
    });
  };


  const actualizarTotalCarrito = (carrito) => {
   
    const compraTotal = carrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
  
    pintarTotalesCarrito(compraTotal);
    guardarCarritoStorage(carrito);
  };
  
  const pintarTotalesCarrito = (compraTotal) => {
   
    const precioTotal = document.getElementById('precioTotal');
  
   
    precioTotal.innerText = compraTotal;
  };
  

  const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };





 
