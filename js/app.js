
const autor = document.getElementById('inputAutor')
const titulo = document.getElementById('inputtitulo')

const patern = /^[a-zA-Z0-9][3,20]$/;

const libro = new Libro

fuction EventListener(){
    document.getElementById('btnAdd'), addEventListener('click', PrepararLibro)
}

function PrepararLibro(){

    if (autor.value != ''|| titulo.value != '') && (patern.test(autor.value)){
    libro.agregar(autor.value, titulo,value)
    }

}