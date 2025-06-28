const InputN1 = $('n1');
const InputN2 = $('n2');
const SelectOperacion = $('operacion');
const Calcular = $('calcular');
const resultadoDiv = $('resultado');

SelectOperacion.addEventListener('change', function(){
    if (SelectOperacion.value === 'División'){
        Calcular.disabled = true;
        resultadoDiv.textContent = 'La operación división está deshabilitada.';
    }
    else{
        Calcular.disabled = false;
        resultadoDiv.textContent = '';
    }
});

Calcular.addEventListener('click', function(){
    const num1 = parseFloat(InputN1.value);
    const num2 = parseFloat(InputN2.value);
    let res;

    switch (SelectOperacion.value){
        case 'Suma':
            res = num1 + num2;
            break;
        case 'Resta':
            res = num1 - num2;
            break;
        case 'Multiplicación':
            res = num1 * num2;
            break;
        default:
            res = 'operación no válida';
    }

    resultadoDiv.textContent = 'Resultado: ' +res;
});





function $(elemento){
    return document.getElementById(elemento);
};