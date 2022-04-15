/*var agora = new Date()
var hora = agora.getHours() // pode ser data anos horas o get
console.log(`Agora são ${hora} horas.`)
if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 18) {
    console.log('Boa noite!')
} else {
    console.log('Bom dia!')
} */


let usuario1 = 30// Number(prompt('Digite um número:'))
let usuario2 = 3 //Number(prompt('Digite um número:'))
//let totalSoma      
//let totalsubtração 
//let totalmultiplicação  
//let totaldivisão 
let operação = (n1,n2) => { // entres os parenteses pode ser qualquer informação a operação deve ser uma varialvel ou numero no fim do progama 
    totalSoma = usuario1 + usuario2        
    totalsubtração = usuario1 - usuario2 
    totalmultiplicação = usuario1 * usuario2 
    totaldivisão = usuario1 / usuario2 

    return totalSoma, totalsubtração,totalmultiplicação,totaldivisão // return pode ser usado no lugar das variaveis criadas let


}
operação(usuario1,usuario2) // neste caso tem sempre que informar a varialvel a ser execultada ou valores
console.log(`A soma é ${totalSoma}`)
console.log(`A subtração é ${totalsubtração}`)
console.log(`A multilicação é ${totalmultiplicação}`)
console.log(`A divisão é ${totaldivisão}`)


let usu = Number(prompt('Digite um número:'))
let usu2 = Number(prompt('Digite outro número:'))
let soma = (soma1) => {
    totSoma = usu + usu2  
}
soma(usu,usu2)
console.log(`Números inseridos ${usu} e ${usu2}`)
console.log(`Soma: ${totSoma}`)

let subtração = (subtração1) => {
    totsubtração = usu - usu2
}
subtração(usu,usu2)
console.log(`Subtração: ${totsubtração}`)

let multilicação = (multilicação1) => {
    totMultiplicaçao = usu * usu2
}
multilicação(usu, usu2)
console.log(`Multiplicação: ${totMultiplicaçao}`)

let divisão = (divisao1) => {
    totDivisao = usu / usu2
}
divisão(usu, usu2)
console.log(`Divisão: ${totDivisao}`)
