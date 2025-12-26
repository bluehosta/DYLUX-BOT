import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url' 

global.owner = [
  ['263716973106', '𝗞𝗛𝗔𝗟𝗜𝗗 𝗢.𝗙.𝗖', true],
  ['263716973106']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['254736958034', '254114098508']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'dylux┃ᴮᴼᵀ' 
global.author = '@𝗸𝗵𝗮𝗹𝗶𝗱' 

//--info FG
global.botName = 'DYLUX'
global.fgig = 'https://github.com/Khalid-official' 
global.fgsc = 'https://github.com/Khalid-official/DYLUX-BOT' 
global.fgyt = 'https://github.com/Khalid-official'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://github.com/Khalid-official'
global.bgp = 'https://github.com/Khalid-official'
global.bgp2 = 'https://github.com/Khalid-official'
global.bgp3 = 'https://github.com/Khalid-official' //--GP NSFW

global.wait = '⌛ _STARTING..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
