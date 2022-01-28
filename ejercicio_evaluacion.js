//Crea una clase usuario que contenga las siguiente propiedades password email
//Inicializa las propiedades en el constructor de la clase
//Crear el metodo login que valide correo y password
//-Metdodo que recibe email y password y mediante un if validamos si lo que recibimos es lo que esta en la propiedad de la clase
//Crear un metodo que resete el password
//LA nueva contraseña tiene que tener al menos  10 caracteres
//Crear un metodo que desloguea al usuario solo imprime usuario salio del sistema.

class Usuario {
    password
    email
    constructor(password, email) {
        this.email = email;
        this.password = password;
    }
    login(password, email) {
        if (this.email == email && this.password == password) {
            console.log("Entraste")
        } else {
            console.log("Saliste")
        }
    }
    reset(passwordViejo, passwordNuevo) {
        if (passwordViejo == this.password && passwordNuevo.length >= 10) {
            this.password = passwordNuevo;
            console.log("password cambiado")
        } else {
            console.log("Intenta de nuevo cambiar el password ")
        }
    }
    logout() {
        console.log("saliste");
    }
}
let maria = new Usuario("password", "correo@correo.com")
maria.login("password","correo@correo.com");
maria.login("incorrecotpassword","correo@correo.com");
maria.reset("password","12345678991");
maria.login("12345678991","correo@correo.com");
maria.logout();

//Crea la clase autor  extiende usuario
class Autor extends Usuario {
    publicaciones = [];
    //numeroDepost;
    constructor(password, email) {
        super(password, email);
    }
    //Crea el metodo nuevoContenido que obtiene una cadena la agrega al arreglo de posteos e incrementa en numero de post
    nuevoPost(contenido) {
        this.publicaciones.push(contenido);
    }
    //Crear un metodo que me regresa el numero de post de ese usuario.
    cuantosPost() {
        console.log(this.publicaciones.length)
    }
    //Crear el metodo que imprime todos los post
    imprimirtodo() {
        console.log(this.publicaciones);
    }
    //Crear metodo que me de un post especifico si no esta explicame que no se encuentra.
    postEspecifico(postQuequiero) {
        if (typeof postQuequiero == "number" && (this.publicaciones.length > postQuequiero)){
            console.log(this.publicaciones[postQuequiero]);
        }else {
            console.log("No pasaste un numero o no se encuentra este post");
        }
    }
}
const  juan= new Autor("pass","juan24@ya.com");
juan.login("pass","juan24@ya.com");
juan.nuevoPost("Este es mi primer post");
juan.nuevoPost("Este es mi segundo post");
juan.nuevoPost("Este es mi tercer post");
juan.nuevoPost("Este es mi cuarto post");

juan.cuantosPost();
juan.nuevoPost("Este es mi quinto post");
juan.cuantosPost();
juan.imprimirtodo();


pedro= new Autor("pass1","pedro@ya.com");
pedro.nuevoPost("Este es mi primer post");
console.log("--------------------")
pedro.imprimirtodo();
pedro.nuevoPost();

//La clase BD tiene un array de usuarios
// Crera metodos para agregar y quitar usuarios de la base de datos
// Crear metodo para listar los usuarios
// Crear metodo para obetner informacion de la base de datos