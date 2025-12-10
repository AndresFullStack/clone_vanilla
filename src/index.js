// AGREGAR ESTO PARA CONOCER LOS HIJOS DE UN FORM:s
// const children = document.getElementById( 'parentDiv' ).getElementsByTagName( 'div' )[0];
// Aplicarlo unicamente para capturar los inputs de un formulario que no tengan el valor, ya que esto es con el CRUD
// A los children se les puede aplicar un for para recorrerlos y poner el focus

// Para que cuando envie un formulario tome la info

// El ecommerce hacerlo con un CRUD que se conecte a una API de productos, pero tambien hacer que tenga un CRUD
// que guarde la info que trajo de la API en el localStorage, junto con los nuevos elementos agregados por el CRUD

// Tener un modo usuario y un modo administrador
// Ese CRUD de productos hacerlo cambiando de modo a administrador
// El modo usuario solo puede ver los productos y agregarlos al carrito

// Los productos van a tener un ID unico, nombre, descripcion, precio, imagen (url), categoria

// El carrito va a tener un ID unico, lista de productos (con cantidad), precio total

// Al enviar el formulario, evitar que se recargue la pagina

// Ambos datos tanto todos los elementos como el carrito se guardan en el localStorage

// document.getElementById( 'formId' ).addEventListener( 'submit', function( event ) {
// Esto ya lo hace el submit por defecto

// HACER UN MAPEO DE LOS PRODUCTOS PARA MOSTRARLOS EN EL HTML
// HACERLO CON UNA FUNCION QUE RECIBA UN ARRAY DE PRODUCTOS Y LOS RENDERICE EN EL HTML
// HACERLO TAMBIEN CON UNA FUNCION QUE RECIBA UN PRODUCTO Y LO RENDERICE EN EL HTML

// HACER VALIDACIONES DE FORMULARIO
// HACER VALIDACIONES DE CAMPOS VACIOS

// HACER UNA PAGINA DE CARRITO
// MOSTRAR LOS PRODUCTOS DEL CARRITO
// PERMITIR ELIMINAR PRODUCTOS DEL CARRITO
// MOSTRAR EL PRECIO TOTAL

// HACER UNA PAGINA DE CHECKOUT
// PERMITIR INGRESAR LA INFORMACION DE ENVIO
// PERMITIR INGRESAR LA INFORMACION DE PAGO
// MOSTRAR UN RESUMEN DEL PEDIDO

// HACER UNA PAGINA DE ADMINISTRACION - MODAL
// MOSTRAR TODOS LOS PRODUCTOS - misma vista catalogo
// PERMITIR AGREGAR, EDITAR, ELIMINAR PRODUCTOS
// EL AGREGAR Y EDITAR DEBE TENER UN FORMULARIO Y ESTAR EN UN MODAL
// ELIMINAR DEBE PEDIR CONFIRMACION (una alerta de confirmacion)

// GUARDAR TODO EN LOCALSTORAGE
// localStorage.setItem("myCat", "Tom");
