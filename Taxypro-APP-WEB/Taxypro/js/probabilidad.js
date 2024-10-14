const selectPeriodo = document.getElementById('periodo');
const botonVerProbabilidad = document.getElementById('verProbabilidad');


function llenarSelect(opciones) {
  selectPeriodo.innerHTML = ''; 
  opciones.forEach(opcion => {
    const optionElement = document.createElement('option');
    optionElement.value = opcion.valor;
    optionElement.textContent = opcion.texto;
    selectPeriodo.appendChild(optionElement);
  });
}

const opcionesPeriodo = [
  { valor: 'dia', texto: 'Día' },
  { valor: 'semana', texto: 'Semana' },
  { valor: 'mes', texto: 'Mes' }
];

llenarSelect(opcionesPeriodo);

botonVerProbabilidad.addEventListener('click', () => {
  const periodoSeleccionado = selectPeriodo.value;
  if (periodoSeleccionado) {
    let url;
    switch (periodoSeleccionado) {
      case 'dia':
        url = 'https://colab.research.google.com/drive/1JIth4e7HSHlaz24_J4tNAF7bAjrMbKB7#scrollTo=FO13B9fh91Bc&uniqifier=1';
        break;
      case 'semana':
        url = 'https://colab.research.google.com/drive/1JIth4e7HSHlaz24_J4tNAF7bAjrMbKB7#scrollTo=AptOFy_E91qo&uniqifier=1';
        break;
      case 'mes':
        url = 'https://colab.research.google.com/drive/1JIth4e7HSHlaz24_J4tNAF7bAjrMbKB7#scrollTo=kHantzPuhQal&uniqifier=1';
        break;
      default:
        alert('Periodo no válido');
        return;
    }
    window.location.href = url;
  } else {
    alert('Por favor, selecciona un periodo');
  }
});
