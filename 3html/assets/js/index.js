document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento canvas
    var canvas = document.getElementById('miGrafico');

    // Datos para el gráfico (por ejemplo, estudiantes terminados por carrera)
    var datos = {
        labels: ['Carrera A', 'Carrera B', 'Carrera C', 'Carrera D'],
        datasets: [
            {
                label: 'Estudiantes Terminados',
                data: [45, 30, 55, 70], // Datos de ejemplo
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
                borderColor: 'rgba(75, 192, 192, 1)', // Borde de las barras
                borderWidth: 1, // Ancho del borde
            },
        ],
    };

    // Configuración del gráfico
    var configuracion = {
        type: 'bar',
        data: datos,
    };

    // Crea el gráfico
    var miGrafico = new Chart(canvas, configuración);
});
