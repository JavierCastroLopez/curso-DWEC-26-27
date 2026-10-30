//Crear una funcion fabrica que genere saludos

function makeGreater(greeting: string): (name: string) => string {
  return (name) => ` ${greeting} - ${name}`
}

const morning = makeGreater("Buenos días")
const evening = makeGreater("Buenas noches")

console.log(['Ana', 'Luis', 'Pablo'].map(morning));


//----------------------------------------------------------------

//Un conversor de diferentes unidades

function makeConverter(factor: number): (value: number) => number {
  return (value) => (value * factor);
}

const kmToMiles = makeConverter(0.621);
console.log(kmToMiles(100))

const euroToDolar = makeConverter(1.08);
console.log([10, 20, 30].map(euroToDolar))

//----------------------------------------------------------------
//crear un marcador de cualquier competicion

// // type xxx{
//   ()
// }

function makeScoreboard(): {
  scoreHome: (n: number) => void;
  scoreAway: (n: number) => void;
  result: () => string
} {
  //declaro las variables que acumulan las puntuaciones del home y el away
  let home = 0;
  let away = 0;
  return {
    scoreHome: (n: number): void => { home += n },
    scoreAway: (n: number): void => { away += n },
    result: () => `${home} -- ${away}`,
  }
}

const granadaToMalaga = makeScoreboard();
const finalChampions = makeScoreboard();

granadaToMalaga.scoreHome(1);
granadaToMalaga.scoreHome(1);
granadaToMalaga.scoreAway(1);

console.log(granadaToMalaga.result())
console.log(finalChampions)
