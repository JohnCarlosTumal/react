/*
class Usuario {
     constructor(nombre, apellido, libros, mascotas=[]){
         this.nombre = nombre
        this.apellido = apellido
         this.libros = libros
         this.mascotas = mascotas
     }

     getFullName(){
         return this.nombre
     }

     addMascota(mascota){
         this.mascotas.push(mascota)
     }

  
 }

 const usUno = new Usuario("john", "tumal", "popol vuh", "toby")
 const usDos = new Usuario("simon", "arbeloa", "los de abajo", "yin")
 const usTres = new Usuario("ivan", "lopez", "pop", "zeus")


 const usuarios = [usUno, usDos, usTres]
 console.log(usuarios)

 console.log(`el nombre del usuario es: ${usUno.getFullName()}`)
 let adicionar = addMascota("flaco")
 console.log(adicionar)
 */




 const usuario = {
 nombre: "john",
 apellido: "tumal",
 libros : [["libro", "autor"], ["libro2", "autor2"] ],
 mascotas: ["mascotaUno", "mascotaDos"]
 }


 let nom = usuario.nombre
 console.log(`el nombre del usuario es ${nom}`)


 let mascota = "mascotaTres"

 let addMascota = usuario.mascotas.push(mascota)
 console.log(`el usuario ${usuario.nombre} tienen como mascotas a:`, usuario.mascotas)

 let counMascotas = usuario.mascotas.length

 console.log(`el numero de mascotas que tiene es: `, counMascotas)

 console.log(`la cantidad de libros: `, usuario.libros)