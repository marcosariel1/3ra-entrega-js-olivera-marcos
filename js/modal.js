//const myModal = document.getElementById('myModal')
//const myInput = document.getElementById('myInput')

//myModal.addEventListener('shown.bs.modal', () => {
//  myInput.focus()
//})

const modalCarrito = document.querySelector('.modal-content');

modalCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('botonEliminar')) {
        eliminarProductoCarrito(event.target.value);
    };

});

