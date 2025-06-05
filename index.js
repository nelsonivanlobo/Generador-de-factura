function generarFactura() {
    let idCliente = document.getElementById("idCliente").value;
    let nombreCliente = document.getElementById("nombreCliente").value;
    let direccionCliente = document.getElementById("direccionCliente").value;
    let cuitCliente = document.getElementById("cuitCliente").value;
    let condFinsCliente = document.getElementById("condFinsCliente").value;
    let medioPago = document.getElementById("medioPago").value;
    let nombreProducto;
    let precio;
    let cantidad;
    let subtotalP = 0;
    let subtotal = 0;
    let iva;
    let total;
    let fecha = new Date();
    window.facturaHTML = ""; 

    // Validación de datos del cliente
    if (!idCliente || !nombreCliente || !direccionCliente || !cuitCliente) {
        alert("Por favor, complete todos los datos del cliente.");
        return;
    }

    window.facturaHTML += `<p>Fecha: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}</p>`;
    window.facturaHTML += `<p><strong>Identificación del Cliente:</strong> ${idCliente}</p>`;
    window.facturaHTML += `<p><strong>Nombre del Cliente:</strong> ${nombreCliente}</p>`;
    window.facturaHTML += `<p><strong>Dirección:</strong> ${direccionCliente}</p>`;
    window.facturaHTML += `<p><strong>CUIT:</strong> ${cuitCliente}</p>`;
    window.facturaHTML += `<p><strong>Condición fiscal:</strong> ${condFinsCliente}</p>`;
    window.facturaHTML += `<p><strong>Medio de pago:</strong> ${medioPago}</p>`;
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

        let continuar = confirm('¿Desea agregar otro producto?');
        if (!continuar) break;
    }

    if (subtotalP === 0) {
        alert("No se ingresaron productos. No se puede generar la factura.");
        return;
    }

    iva = subtotalP * 0.21;
    total = subtotalP + iva;

    window.facturaHTML += `<p><strong>Subtotal:</strong> ${subtotalP}</p>`;
    window.facturaHTML += `<p><strong>IVA (21%):</strong> ${iva}</p>`;
    window.facturaHTML += `<p><strong>Total:</strong> ${total}</p>`;

    // Guardar el contenido de la factura en localStorage
localStorage.setItem('facturaHTML', facturaHTML);

window.location.href = 'factura.html';
}