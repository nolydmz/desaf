class usuario{
    constructor(nombre, apellido, libros, mascotas ){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombreDeMascota){
        this.mascotas.push(nombreDeMascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(libro){
        this.libros.push(libro)
    }

    getBookNames(){
        const nombres = this.libros.map(i => (i.name))
        return nombres
    }
}

const usuario1 = new usuario(`Noelia`, `Dominguez`, [], [])

console.log(usuario1.getFullName())

usuario1.addMascota("Lola")
usuario1.addMascota("Copo")

console.log(usuario1.countMascotas())

usuario1.addBook({
    nombre: "Monte Hermoso",
    autor: "Noelia Dominguez"
})

usuario1.addBook({
    nombre:"Oceano",
    autor: "Jonathan Lopez"
})

console.log(usuario1.getBookNames())

console.log("Repasando JS")