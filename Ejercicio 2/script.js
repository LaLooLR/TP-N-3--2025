const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "mandarina", "naranja", "sandía", "melón", "kiwi"];

const palabraInput = $('búsqueda');
const filtrarBtn = $('filtrar');
const resultadoDiv = $('resultado');

filtrarBtn.addEventListener('click', function(){

    const texto = palabraInput.value.trim().toLowerCase();

    if (texto === ''){
        resultadoDiv.textContent = 'Ingresar palabra!!!'
        return;
    }

    const filtradas = palabras.filter(palabra=>palabra.toLowerCase().includes(texto));

    if (filtradas.length === 0){
        resultadoDiv.textContent = "No hay coincidencias."
    }
    else{
        resultadoDiv.innerHTML = "<ul>"+filtradas.map(p=> `<li>${p}</li>`).join("") + "</ul>";
    }
})


function $(elemento){
    return document.getElementById(elemento);
};