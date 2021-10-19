// Supports ES6
const bot = require('venom-bot')
const { db } = require('./models/banco')
const { step } = require('./models/stages')

// ############ sessão do bot #############
bot
  .create({ headless: true })
  .then(client => start(client))
  .catch(err => console.log(err))

function start(client) {
  client.onMessage(message => {
    if (!message.isGroupMsg) {
      let resp = step[getStage(message.from)].obj.execute(
        message.from,
        message.body,
        message.sender
      )
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index]
        client.sendText(message.from, element)
      }
    }
  })
}

function getStage(user) {
  if (db[user]) {
    //Se existir esse numero no banco de dados
    return db[user].stage
  } else {
    //Se for a primeira vez que entra e contato
    db[user] = {
      stage: 0,
      itens: []
    }
    return db[user].stage
  }
}
