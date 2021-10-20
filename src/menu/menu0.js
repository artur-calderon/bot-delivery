const { dataBase } = require('../firebase')

const cardapio0 = []

dataBase.collection('produtos').onSnapshot(item => {
  item.docs.map(item => {
    cardapio0.push(item.data())
  })
})

// const cardapio0 = {
//   1: {
//     description: 'Produto 1',
//     price: 100.0
//   },
//   2: {
//     description: 'Produto 2',
//     price: 29.95
//   },
//   3: {
//     description: 'Serviço 1',
//     price: 425.5
//   }
// }

exports.menu0 = cardapio0
