const mostrarTabla = (event) => {
  event.preventDefault(); // Evita que se recargue la página

  const numero = Number(document.getElementById('numero').value);

  if (numero > 0 && numero <= 10) {
    let tabla = document.getElementById('tabla');
    let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2>`;
    tablaDividir += '<ul>';

    for (let i = 0; i <= 10; i++) {
      tablaDividir += `<li>${numero} / ${i} = ${
        i === 0 ? 'No se puede dividir entre 0' : (numero / i).toFixed(2)
      }</li>`;
    }

    tablaDividir += '</ul>';
    tabla.innerHTML = tablaDividir;

  } else {
    alert('El número introducido debe estar entre 1 y 10 (ambos inclusive)');
    document.getElementById("numero").value = '';
  }
};