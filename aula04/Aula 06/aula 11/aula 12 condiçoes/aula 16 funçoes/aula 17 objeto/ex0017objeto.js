let amigo = {nome:'Jose', sexo:'Masculino', peso: 80, engordou:(p=0)=> {
    console.log('Engordou')
    this.peso += p
}}
amigo.engordou(-1)
console.log(`${amigo.nome}, pesa ${amigo.peso}Kg`)