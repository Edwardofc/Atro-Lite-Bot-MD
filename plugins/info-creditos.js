var handler = async (m) => {

let tqto = `👤 *Desarrollador*
⬡👑 *Edwardofc*
https://github.com/Edwardofc

🫂 *Colaboradores Oficiales*
⬡📍 ** 
⬡📍 **
⬡📍 **
⬡📍 **


_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `📥 *GitHub - Colaboradores*

⬡📥 https://github.com/elrebelde21
⬡📥 https://github.com/GataNina-Li
⬡📥 https://github.com/ReyEndymion
⬡📥 https://github.com/WOTCHITO

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `📝 *Contacto - Colaboradores* 

⬡ **
@5

⬡ **
@

⬡ **
@5

⬡ **
@5`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
