//
//Función que obtiene un objeto y una propiedad y si el objeto la tiene, la elimina y devuelve true, de lo contrario, devuelve false
function removeProperty(obj,prop){

  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    console.log(obj);
    return true;
  }else{
    return false;
  }

}
//Objeto
var customObject = {
    "Nombre": "daniel",
    "method": "newURI"
};

//Llamado a función
deleteProperty = removeProperty(customObject,"False");

console.log(customObject);
console.log("deleteProperty="+deleteProperty);

//Función que convierte una fecha ingresada por un usuario en el formato M/D/YYYY a un formato AAAMMDD
function formatDate(userDate){
  console.log(userDate);
  var parts = userDate.split('/');
  if (parts[0].length == 1) parts[0] = '0' + parts[0];
  if (parts[1].length == 1) parts[1] = '0' + parts[1];
  return parts[2]  + parts[1] + parts[0];

}
//Llamado a función
 newFormatDate = formatDate("31/12/2014");
 console.log(newFormatDate);


//  // Galería de Imágenes
$(document).ready(function setup(){
  $(".remove").click(function(){
    $(this).parent().remove();
  });
});
