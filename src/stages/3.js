const { db } = require('../models/banco')
const { step } = require('../models/stages')
const { dataBase } = require('../firebase')

function execute(user, msg, contato) {
  if (msg === '*') {
    db[user].stage = 0
    return ['Pedido cancelado com sucesso']
  }

  if (msg === '#') {
    db[user].stage = 5

    return step[5].obj.execute(user, '')
  }

  dataBase
    .collection('pedidos')
    .add({
      pedido: db[user].itens,
      cliente: contato.name,
      foto: contato.profilePicThumbObj.img,
      endereco: msg
    })
    .then(() => {
      console.log('Adicionando pedido ao banco de dados...')
    })
    .catch(err => {
      console.log(err)
    })
  return [
    '```Digite # para continuar ou * para cancelar```',
    `Confirma endereco de entrega : \n ${msg}`
  ]
}

exports.execute = execute
