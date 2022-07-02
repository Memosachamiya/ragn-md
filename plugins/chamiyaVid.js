/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11

Plugin by : Black Amda
*/
const {
    FancyRandom,
    getListFromCommand,
    skbuffer
  } = require("raganork-bot");
  const {
    Module,
    commands
  } = require('../main')
  const {
    MODE,
    ALIVE,
    BOT_INFO
  } = require('../config');
  const config = require('../config');
  const {
    parseAlive
  } = require('./misc/misc');
  let w = MODE == 'public' ? false : true
 
Module({pattern: 'feelhigh', fromMe: w, desc: '' }, (async (message, match) => {
    return await message.client.sendMessage(message.jid, {
        video: {
            url: fs.readFileSync("temp/feeling_high.mp4")
        },
        mimetype: "video/mp4",
        caption: "Memosa",
        thumbnail: await skbuffer(thumbnail)
    },{quoted:message.data});
}));
