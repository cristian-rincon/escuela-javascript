var cristian = {
    nombre : 'Cristian',
    apellido : 'RIncon',
    edad: 23,
    peso: 90,
}


console.log(`Al principio del año ${cristian.nombre} pesa ${cristian.peso} Kg.`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;

const aumentaPeso = persona => persona.peso += INCREMENTO_PESO;
const bajaPeso = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        aumentaPeso(cristian);
    } else if (random < 0.5) {
        bajaPeso(cristian);
    } 
}


console.log(`Al final del año ${cristian.nombre} pesa ${cristian.peso.toFixed(1)} Kg.`);
