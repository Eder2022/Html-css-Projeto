let parOuImpar = numero => {
    if (numero % 2 == 0) {
      return 'par'
    } else {
        return 'impar'
    }
}
console.log(parOuImpar(10))

let fatorial = numero => {
    let fat = 1
    for(let c = numero; c > 1; c--) { // let c uma variavel q é igual ao numero a ser iformado. ai c maior q 1 c vai ser menos 1 paraa regredir
        fat *= c
    } return fat
}
console.log(fatorial(5))

let fato = numero => {
    if (numero == 1) {
        return 1
    } else {
        return numero * fato(numero-1)
    }
    
}
console.log(fato(5))