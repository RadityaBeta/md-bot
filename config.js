let fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'PxDBU4',
  'https://api.xteam.xyz': '713ebae1a05cc81d',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': '6fd2385a0d4169164b9c6544',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
global.packname = data.namabot
global.author = data.owner
global.wm = data.namabot + ' ' + data.owner

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      healt: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythi: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      fishingrod: 'π£',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      iron: 'βοΈ',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      makananpet: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
