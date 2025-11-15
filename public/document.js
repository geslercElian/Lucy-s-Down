function cambiarCantidad(inputId, cambio) {
    const input = document.getElementById(inputId);
    let valor = parseInt(input.value) || 0;
    valor += cambio;

    if (valor < 0) valor = 0;
    input.value = valor;

    calcularTotal();
}

function calcularTotal() {
    const valores = {
        billete500: 500,
        billete200: 200,
        billete100: 100,
        billete50: 50,
        billete20: 20,
        billete10: 10
    };

    let total = 0;

    // Calcular total y actualizar subtotales
    for (const [id, valor] of Object.entries(valores)) {
        const cantidad = parseInt(document.getElementById(id).value) || 0;
        const subtotal = cantidad * valor;
        total += subtotal;

        // Actualizar subtotales en el desglose
        const subtotalElement = document.getElementById(`subtotal${id.replace('billete', '')}`);
        if (subtotalElement) {
            subtotalElement.textContent = `${cantidad} billetes = C$ ${subtotal.toFixed(2)}`;
        }
    }

    // Actualizar total general
    document.getElementById('totalAmount').textContent = `C$ ${total.toFixed(2)}`;
}

function resetearContador() {
    // Resetear todos los inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = '0';
    });

    // Resetear total
    document.getElementById('totalAmount').textContent = 'C$ 0.00';

    // Resetear subtotales
    const subtotales = document.querySelectorAll('[id^="subtotal"]');
    subtotales.forEach(element => {
        element.textContent = '0 billetes = C$ 0.00';
    });
}

// Inicializar calculadora al cargar la página

document.addEventListener('DOMContentLoaded', calcularTotal);
