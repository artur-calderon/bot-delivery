const { db } = require('../models/banco')

function execute(user, msg) {
  setTimeout(() => {
    db[user].stage = 0
  }, 5000)
  return [
    'Obrigado pela preferencia.',
    'Aguarde, seu pedido chegará em breve',
    'Mais informações ligue para 33333-3311'
  ]
}

exports.execute = execute
