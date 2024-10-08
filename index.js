function generarFactura() {
    var idCliente = document.getElementById("idCliente").value;
    var nombreCliente = document.getElementById("nombreCliente").value;
    var direccionCliente = document.getElementById("direccionCliente").value;
    var telefonoCliente = document.getElementById("telefonoCliente").value;
    var nombreProducto;
    var precio;
    var cantidad;
    var subtotalP = 0;
    var subtotal = 0;
    var iva;
    var total;
    var fecha = new Date();
    window.facturaHTML = ""; 

    // Validación de datos del cliente
    if (!idCliente || !nombreCliente || !direccionCliente || !telefonoCliente) {
        alert("Por favor, complete todos los datos del cliente.");
        return;
    }

    window.facturaHTML += `<p>Fecha: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}</p>`;
    window.facturaHTML += `<p><strong>Identificación del Cliente:</strong> ${idCliente}</p>`;
    window.facturaHTML += `<p><strong>Nombre del Cliente:</strong> ${nombreCliente}</p>`;
    window.facturaHTML += `<p><strong>Dirección:</strong> ${direccionCliente}</p>`;
    window.facturaHTML += `<p><strong>Teléfono:</strong> ${telefonoCliente}</p>`;
    window.facturaHTML += "<hr>";

    while (true) {
        nombreProducto = prompt('Ingrese Nombre del Producto (o presione Cancelar para terminar)');
        if (nombreProducto === null) {
            break;
        }

        precio = parseFloat(prompt('Ingrese Precio del Producto'));
        if (isNaN(precio)) {
            alert("El precio ingresado no es válido.");
            return;
        }

        cantidad = parseInt(prompt('Ingrese Cantidad del Producto'));
        if (isNaN(cantidad)) {
            alert("La cantidad ingresada no es válida.");
            return;
        }

        subtotal = precio * cantidad;
        subtotalP += subtotal;

        window.facturaHTML += `<p><strong>Producto:</strong> ${nombreProducto}</p>`;
        window.facturaHTML += `<p><strong>Precio:</strong> ${precio}</p>`;
        window.facturaHTML += `<p><strong>Cantidad:</strong> ${cantidad}</p>`;
        window.facturaHTML += `<p><strong>Subtotal del Producto:</strong> ${subtotal}</p>`;
        window.facturaHTML += "<hr>";

        var continuar = confirm('¿Desea agregar otro producto?');
        if (!continuar) break;
    }

    if (subtotalP === 0) {
        alert("No se ingresaron productos. No se puede generar la factura.");
        return;
    }

    iva = subtotalP * 0.19;
    total = subtotalP + iva;

    window.facturaHTML += `<p><strong>Subtotal:</strong> ${subtotalP}</p>`;
    window.facturaHTML += `<p><strong>IVA (19%):</strong> ${iva}</p>`;
    window.facturaHTML += `<p><strong>Total:</strong> ${total}</p>`;

    // Guardar el contenido de la factura en localStorage
localStorage.setItem('facturaHTML', facturaHTML);

window.location.href = 'factura.html';
}