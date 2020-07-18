var barrio = prompt('¿En qué barrio vives?')


switch (barrio) {
    case 'San andrés':
    case 'san andres':
        console.log('Cool, yo también vivo allí.')
        
        break;
    case 'Venecia':
        console.log('Cool, yo vivo cerca de ese barrio.')

    default:
        console.log('Que interesante')
        break;
}