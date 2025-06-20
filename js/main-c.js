var cantidadDeGatos = 10
var cantidadDePasos = 4

for(var g = 1; g <= cantidadDeGatos; g++){

    var pasos = ''

    for(var p = 1; p <=cantidadDePasos; p++){
        pasos = pasos + '🐾'
    }

    console.log('Gato' + '#' + g + '🐈' + (g %2 == 0? '⬛' : '') + pasos)
}

