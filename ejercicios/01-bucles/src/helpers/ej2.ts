//crear una funcion que se le pase como parametro un texto y lo incripte.
//añadir una funcion inversa que una desencripte una cadena de texto encriptada
//nota: buscar alguna libreria que permita generar cadenas encriptadas de
//forma segura
//@autor: JavierCL
//Investigacion: dos librerias que permitan encriptar o porque has decidido
//esa libreria
//He estado investigando tanto CryptoJS como crypto, y he decido
//utilizar Bcrypt porque es menos 
//probarlo con 3 cadenas o mas

//importaciones
import Cryptojs from "crypto-js"

//Declaracion de variables
const key:string = "encriptadorJCL0310"

const passwords[] = ["1234", "passWord","soyUnaPassword"]
const passwordsCifradas[] = []


//Funciones
function cifrador(password:string):string {
  return CryptoJS.AES.encrypt(password, key).toString;
}

function descifrador(passwordCifrada){

}
