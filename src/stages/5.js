const { db } = require('../models/banco')
const { step } = require('../models/stages')
let estagioInterno = 0

function execute(user, msg) {
  //db[user].stage =
  console.log('stage 5')

  if (estagioInterno === 1) {
    db[user].stage = 4

    return step[4].obj.execute(user, '')
  }

  if (msg === '1') {
    return ['Precisa de troco? Sim, Não?']
  }

  if (msg === 'Sim') {
    db[user].stage = 4
    return ['Pra Quanto?']
  }

  if (msg === 'Não') {
    return (db[user].stage = 4)
  }

  if (msg === '2') {
    return (db[user].stage = 4)
  }
  console.log(estagioInterno)
  if (msg === '3') {
    return ['Chave do PIX aqui 000.000.000-00']
  }
  return ['Escolha a forma de pagamento:\n1️⃣-Dinheiro\n2️⃣-Cartão\n3️⃣-PIX']
}

exports.execute = execute
