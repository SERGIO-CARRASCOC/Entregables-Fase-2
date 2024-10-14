document.addEventListener('DOMContentLoaded', function() {
    // Simulación de datos de ventas
    const totalVentas = 50000;
    const ventasMes = 12000;
    const ventasDia = 500;

    // Actualizar el DOM con los datos de ventas
    document.getElementById('total-ventas').textContent = `$${totalVentas}`;
    document.getElementById('ventas-mes').textContent = `$${ventasMes}`;
    document.getElementById('ventas-dia').textContent = `$${ventasDia}`;
});