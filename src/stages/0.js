const { menu0 } = require('../menu/menu0')
const { db } = require('../models/banco')

function execute(user, msg, contato) {
  // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
  stamp = new Date()
  hours = stamp.getHours()
  if (hours >= 18 && hours < 24) {
    time = 'Boa noite'
  } else if (hours >= 12 && hours < 18) {
    time = 'Boa tarde'
  } else if (hours >= 0 && hours < 12) {
    time = 'Bom dia'
  }

  let menu = ' CARDÁPIO \n\n'

  // for (let i = 0; i < menu0.length; i++) {
  //   console.log(`Log do stage 0 ${i}`)
  //   let element = menu0[i]
  //   menu += `${value} - ${element.description}        R$ ${element.price} \n`
  // }

  Object.keys(menu0).forEach(value => {
    console.log(value)
    let element = menu0[value]
    menu += `${value} - ${element.description}        R$ ${element.price} \n`
  })

  db[user].stage = 1

  return [
    menu,
    `${time} ${contato.name} sou uma assistente virtual, irei apresentar o cardápio, para fazer o pedido basta enviar o codigo do produto`
  ]
}

exports.execute = execute
