const _private=new WeakMap();
class libros{
    constructor(autor,nombre,numeropaginas){
        const propiedades={
        _autor:autor,
        _nombre:nombre,
        _numeropaginas:numeropaginas     
        }
        _private.set(this,{propiedades})
    }
    set nombrelibro(nombre1){
        return _private.get(this).propiedades["_nombre"]=nombre1
    }
    get mostrarlibro(){
        return _private.get(this).propiedades["_nombre"];
    }

    
}
let libro1=new libros("gabriel garcia marquez","cienn años de soledad","350")
console.log(libro1)