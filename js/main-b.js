console.log("Ejercicio B")

var cantidadDeGatos= 5
var cantidadDePasos= 3
var i= 1

do{
    var pasos= ""
    var PasoActual= 1

    do{
        if(PasoActual === 1){
            pasos= "🐾"
        } else if( PasoActual === 2){
            pasos = pasos + "🐾"
        } else if( PasoActual === 3){
            pasos = pasos + "🐾 "   
        } else if ( PasoActual === 4){
            pasos = pasos + "🐾"
        } else if( PasoActual === 5){
            pasos = pasos + "🐾"
        } else{
            pasos = pasos + "🐾"
        }

        PasoActual= PasoActual + 1       

    } while (PasoActual <= cantidadDePasos)
    
    console.log("Gato # " , i, ":", " 🐈 ", pasos)
    i = i + 1
} while( i<= cantidadDeGatos)