/*no quites los creditos!, no seas rata

 Credits to:
CuriosityBot-MD*/

import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';

global.owner = [
['51935531943', '𝗖𝗿𝗲𝗮𝗱𝗼𝗿 💖', true], 
['524531287294', '𝗔𝘇𝗮𝗺𝗶𝗝𝘀 🍧', true],
['573218138672', '𝗢𝘄𝗻𝗲𝗿 🍭', true]];

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

let file = fileURLToPath(import.meta.url);
watchFile(file, () => { unwatchFile(file);
console.log(chalk.yellow("Se actualizo el archivo config.js"));
import(`${file}?update=${Date.now()}`);
});
