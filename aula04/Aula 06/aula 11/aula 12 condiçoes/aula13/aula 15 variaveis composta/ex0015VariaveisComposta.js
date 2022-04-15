let num  = [5,8,2,9,3]

console.log(`o vetor tem ${num.length}`)
console.log(`o primeiro valor é ${num[0]}`)
num.push(1) // acrecesnta numero
num.sort() // poe em ordem
console.log(`foi adicionado um numero e posto em ordem ${num}`)
let pos = num.indexOf(4) // procura o valor na posiçao informada
if (pos == -1 ) {
    console.log(`A posição ${pos} não foi encontrada`)
} else {
    console.log(`Aposiçao encontrada foi ${pos}`)
} 

let valores = [1,3,2,5,4,7]
for(let n =0; n <valores.length; n++ ) {
    console.log(`a posição ${n} tem o ${valores[n]}`)
}

for (let n in valores) {
    console.log(valores[n])
}

