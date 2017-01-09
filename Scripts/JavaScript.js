//document.getElementById("btnAcpetar").addEventListener("clik",juntarNombre)
//Referenciado desde el Index.html
//function saludo() {
//    var texto = "Hola Mundo";
//    //getElementById se encarga de buscar el id(es unico dentro del documento) dentro del html
//    //innerHTML se mete dentro de la etiqueta que hayamos buscado
//    document.getElementById("divMensaje").innerHTML = texto;
//}

function concat() {
    var nom = document.getElementById("txtNombre").value;
    var ape = document.getElementById("txtApe").value;
    var error = "No puede estar vacio"
    
    if (nom == "") {
        document.getElementById("errorNom").innerHTML = error;
    } else {
        document.getElementById("errorNom").innerHTML = "";
    }

    if (ape == "") {
        document.getElementById("errorApe").innerHTML = error;
    } else {
        document.getElementById("errorApe").innerHTML = "";
    }

    if(nom != "" && ape!= ""){
        document.getElementById("nomCompleto").innerHTML = nom +" "+ ape;   
    }
       
}