var cristian = {
    nombre : 'Cristian',
    apellido : 'RIncon',
    edad: 23,
    peso: 90,
}

console.log(`Al principio del año ${cristian.nombre} pesa ${cristian.peso} Kg.`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;

const aumentaPeso = persona => persona.peso += INCREMENTO_PESO;
const bajaPeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = cristian.peso - 3;
var dias = 0;

while (cristian.peso > META) {
    
    if (comeMucho()) {
        aumentaPeso(cristian);
    } 
    if (realizaDeporte()) {
        bajaPeso(cristian);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${cristian.nombre} alcanzó la meta de ${META} Kg.`);
