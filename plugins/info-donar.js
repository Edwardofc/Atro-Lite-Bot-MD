var handler = async (m, { conn, command }) => {

let str = `💸 *Donar*

💳 *PAYPAL*
${paypal}

👑 *Creador del bot*
wa.me/51935531943

💰 *Yape*
 - *Puedes comunicarse con mi dueño y pedir su yape* 

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_
${md}`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
