// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"
const string = "index.js";

function extension(string){
  let nombreArchivo = string.lastIndexOf("."); 
  let extensionArchivo = string.slice(nombreArchivo);
  console.log(extensionArchivo)
  // if (ext == null){
  //   console.log("sin extension")
  // }else{
  //   return console.log(ext.pop());
     
  // }
}
extension(string);