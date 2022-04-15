var agora = new Date()
var diaDaSemana = agora.getDate()
/* esta ok o codigo mas não pega a semana do pc*/
switch(diaDaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[Erro] Dia invalido!')
        break
}

var anoAtual = Number(prompt('Ano atual'))
var anoNascimento = Number(prompt('Ano nascimento'))
var anoEmissãoRg = Number(prompt('Ano emissão rg'))
var hoje = anoAtual - anoNascimento
var emissão = hoje -anoEmissãoRg
if (hoje <20 || emissão <= 5 ) {
    console.log('Deve ser renovada de 5 em 5 anos')
} else if (hoje <=50 || emissão <=10) {
    console.log('deve ser renovada de 10 em 10 anos ')
} else if (hoje >=50 || emissão <=15) {
    console.log('deve ser renovada de 10 em 10 anos ')
}