/* Crear una función que muestre por consola la fecha y hora con el siguiente formato:
    Hoy es : Miercoles
    Hora actual: 10:34 */
    
    const hora =()=>{
      let hora=new Date();
      var semana= ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
      console.log("Hoy es :"+semana[hora.getDay()]);
      console.log("Hora actual: "+hora.getHours()+":"+hora.getMinutes());
  }
  
  hora();
