/*no quites los creditos!, no seas rata

 Credits to:
CuriosityBot-MD*/

import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';

global.owner = [
['51935531943', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 💖', true], 
['524531287294', '𝗔𝘇𝗮𝗺𝗶𝗝𝘀 🍧', true],
['573013482814', '𝗢𝘄𝗻𝗲𝗿 🍭', true]];

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = ""; //Ejemplo: +59309090909
global.confirmCode = "";

global.suittag = ['5214531287294'];
global.mods = [];
global.prems = [];

//Aqui encuentras los nombres del bot
global.packname = "Ⓐ︎ 𝖠𝗍𝗋𝗈𝖡𝗈𝗍𝖫𝗂𝗍𝖾-𝖬𝖣";
global.author = "𝖠𝗍𝗋𝗈 : 𝖡𝗈𝗍 : 𝖫𝗂𝗍𝖾";
global.wm = "Ⓐ︎ 𝖠𝗍𝗋𝗈 𝖫𝗂𝗍𝖾";
global.wm2 = "𝖠𝗍𝗋𝗈𝖡𝗈𝗍𝖫𝗂𝗍𝖾";
global.azami = "Ⓐ︎ 𝖠𝗍𝗋𝗈";
global.cb = "*🚀 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼...*";


//Las Versiones Y Entre Otros
global.vs = "V2";
global.library = "Baileys";
global.baileys = "@whiskeysockets/baileys";
global.lenguaje = 'Español';
global.menudi = ["⛶","❏","⫹⫺"];
global.dev = "Atro ~ Lite";
global.devnum = "+51 935531943";

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda noche'; break; case 1: hour = 'Linda noche'; break; case 2: hour = 'Linda noche'; break; case 3: hour = 'Linda mañana'; break; case 4: hour = 'Linda mañana'; break; case 5: hour = 'Linda mañana'; break; case 6: hour = 'Linda mañana'; break; case 7: hour = 'Linda mañana'; break; case 8: hour = 'Linda mañana'; break; case 9: hour = 'Linda mañana'; break; case 10: hour = 'Buen dia'; break; case 11: hour = 'Buen dia'; break; case 12: hour = 'Buen dia'; break; case 13: hour = 'Buen dia'; break; case 14: hour = 'Bonita tarde'; break; case 15: hour = 'Bonita tarde'; break; case 16: hour = 'Bonita tarde'; break; case 17: hour = 'Bonito anochecer'; break; case 18: hour = 'Linda noche'; break; case 19: hour = 'Linda noche'; break; case 20: hour = 'Linda noche'; break; case 21: hour = 'Linda noche'; break; case 22: hour = 'Linda noche'; break; case 23: hour = 'Linda noche'; break;}
global.saludo = '🦉' + hour;

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")

global.fotos = ImgAll.getRandom()
global.enlaces = linkSity.getRandom()

let file = fileURLToPath(import.meta.url);
watchFile(file, () => { unwatchFile(file);
console.log(chalk.yellow("Se actualizo el archivo config.js"));
import(`${file}?update=${Date.now()}`);
});
