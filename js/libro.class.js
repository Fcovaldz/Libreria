class Libro{
    // Propiedades 
    id = 0
    autor = ''
    titulo = ''

    agregar(array){
        this.autor = array[0]
        this.titulo = array[1]
        this.id ++
        console.log(this.id, this.autor, this.titulo)
    }
}