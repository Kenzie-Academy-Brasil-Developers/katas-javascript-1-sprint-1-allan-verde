function oneThroughTwenty() {
  let meuRetorno = []
  let incre = 1

  while (incre <= 20){
    meuRetorno.push(incre)
    incre++
  }

  return meuRetorno
}

console.log(oneThroughTwenty())

function evensToTwenty() {
  let meuRetorno = []
  let incre = 2
  
  while (incre <= 20) {
    meuRetorno.push(incre)
    incre += 2
  }  

  return meuRetorno
}

console.log(evensToTwenty())

function oddsToTwenty() {
  let meuRetorno = []
  let incre = 1
  
  while (incre < 20) {
    meuRetorno.push(incre)
    incre += 2
  }

  return meuRetorno
}

console.log(oddsToTwenty())

function multiplesOfFive() {
  let meuRetorno = []
  let incre = 1
  
  while (incre <= 100) {
    if (incre % 5 === 0) {
      meuRetorno.push(incre)
    }
    
    incre++
  }

  return meuRetorno
}

console.log(multiplesOfFive())

function squareNumbers() {
  let meuRetorno = []
  let incre = 1
  const expoente = 1/2
  let resBooleano = 0
  
  while (incre <= 100) {
    resBooleano = Number.isInteger(Math.pow(incre, expoente)) // A variável resBooleano recebe true ou false, dependendo do resultado da raíz quadrada(em forma de potência, elevado a const expoente) da variável incre seja um número inteiro ou não.
    if (resBooleano === true) {
      meuRetorno.push(incre)
    }
    incre++
  }

  return meuRetorno
}

console.log(squareNumbers())

function countingBackwards() {
  let meuRetorno = []
  for (let incre = 20; incre >= 1; incre--) {
    meuRetorno.push(incre)
  }

  return meuRetorno
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    let meuRetorno = []
    for (let incre = 20; incre >= 2; incre -= 2) {
      meuRetorno.push(incre)      
    }

    return meuRetorno
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let meuRetorno = []
  for (let incre = 19; incre >= 1; incre -= 2) {
    meuRetorno.push(incre)
  }

  return meuRetorno
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    let meuRetorno = []
    for (let incre = 100; incre >= 1; incre--) {
      if (incre % 5 === 0) {
        meuRetorno.push(incre)
      }
    }

    return meuRetorno
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let meuRetorno = []
  let incre = 100
  const expoente = 1/2
  let resBooleano = false
  while (incre >= 1) {
    resBooleano = Number.isInteger(Math.pow(incre, expoente)) // A variável resBooleano recebe true ou false, dependendo do resultado da raíz quadrada(em forma de potência, elevado a const expoente) da variável incre seja um número inteiro ou não.
    if (resBooleano === true) {
      meuRetorno.push(incre)
    }
    incre--
  }

  return meuRetorno
}

console.log(squareNumbersBackwards())
