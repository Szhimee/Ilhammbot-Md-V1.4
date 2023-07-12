/*
    * Created By QyuuNee
    * Subscribe Biar Work :3
    * Minimal Credit Nya Lah
    * Buy Panel? 088210828960
    * SC INI GRATIS! LU JUAL? DEPET TIKET NERAKA
*/

const fs = require('fs')
const chalk = require('chalk')

global.keyai = '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' // https://platform.openai.com/account/api-keys

global.namabot = 'Ilhammbot'
global.namaowner = 'Ilhammm'

global.owner = ['6285784537506']
global.ownernomer = "6285784537506"
global.premium = ['6285784537506']
global.nomorOwner = ['6285784537506']

global.packname = 'Ihammbot'
global.author = 'MultiDevice'

global.prefa = ['', '!', '.', '#', '$', ',']

global.mess = {
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    error: '🚫 Fitur Sedang Error !',
}

global.thumb = fs.readFileSync('./hutod.jpg')
global.botname = 'Ilhammbot'
global.ttname = 'Andreas Ilham'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
