let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://i.ibb.co/BzR1jRq/08a088fe953b.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "โ Made by Arip Turuเญงโคโ๐ด",
        "description": `
โใ *Sewa bot* ใ
โ     
โ 1 Grup / 30 Hari
โ Rp. 10,000 Dana
โ Rp. 15,000 Pulsa 
โ
โ 1 Premium / 30 Hari
โ Rp. 5,000 Dana
โ Rp. 10,000 Pulsa
โ
โ tertarik? hubungi: 
โ @6285802829541 (Arip Turuเญงโคโ๐ด)
โโโโโ
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6288217277973@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/6285802829541\n\nowner number : wa.me/6285802829541"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
