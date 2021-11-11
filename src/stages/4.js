const { db } = require('../models/banco')

function execute(user, msg) {
  console.log('stage 4')
  setTimeout(() => {
    db[user].stage = 0
    db[user].itens = []
  }, 10000)
  return [
    'Obrigado pela preferencia.',
    'Aguarde, seu pedido chegará em breve',
    'Mais informações ligue para 33333-3311'
  ]
}

exports.execute = execute
