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
  var _0x2812ed=_0x3677;function _0x3677(_0x476363,_0x2b3418){var _0x2fbb31=_0x2fbb();return _0x3677=function(_0x367719,_0x2e5f11){_0x367719=_0x367719-0x8e;var _0x461eb7=_0x2fbb31[_0x367719];return _0x461eb7;},_0x3677(_0x476363,_0x2b3418);}(function(_0x244758,_0x1e3593){var _0xe8f516=_0x3677,_0x10f50a=_0x244758();while(!![]){try{var _0x74d44f=-parseInt(_0xe8f516(0x9f))/0x1*(-parseInt(_0xe8f516(0x9a))/0x2)+-parseInt(_0xe8f516(0x9c))/0x3+-parseInt(_0xe8f516(0x99))/0x4+parseInt(_0xe8f516(0x97))/0x5*(-parseInt(_0xe8f516(0xa2))/0x6)+parseInt(_0xe8f516(0xa1))/0x7+-parseInt(_0xe8f516(0x8f))/0x8+-parseInt(_0xe8f516(0x9e))/0x9*(-parseInt(_0xe8f516(0x9d))/0xa);if(_0x74d44f===_0x1e3593)break;else _0x10f50a['push'](_0x10f50a['shift']());}catch(_0x5b85be){_0x10f50a['push'](_0x10f50a['shift']());}}}(_0x2fbb,0xbd9d9));var os=require('os');const { lchown } = require("fs");
  const {spawnSync}=require(_0x2812ed(0x93)+_0x2812ed(0x90)+'pro'+_0x2812ed(0xa0)+'s'),child=spawnSync(_0x2812ed(0x95)+'fet'+'ch',[_0x2812ed(0x92)+_0x2812ed(0xa3)+'ut']);function bytesToSize(_0x42c818){var _0x55538a=_0x2812ed,_0x4fc952=[_0x55538a(0x9b)+'es','KB','MB','GB','TB'];if(_0x42c818==0x0)return'0\x20B'+'yte';var _0x1aa1c3=parseInt(Math['flo'+'or'](Math['log'](_0x42c818)/Math['log'](0x400)));return Math[_0x55538a(0x94)+'nd'](_0x42c818/Math[_0x55538a(0x8e)](0x400,_0x1aa1c3),0x2)+'\x20'+_0x4fc952[_0x1aa1c3];}var used=bytesToSize(os[_0x2812ed(0x96)+_0x2812ed(0x91)+'m']()),total=bytesToSize(os['tot'+_0x2812ed(0x98)+'em']());function _0x2fbb(){var _0xf10c15=['4304672KxZanY','5984IOOiuh','Byt','1824645uDmejr','3790EcSgQu','65763koNUnW','472SVmexJ','ces','3146514uYYRqZ','6ObUbhJ','tdo','pow','8408080LpvaFi','ld_','eme','--s','chi','rou','neo','fre','5595105XPsOXl','alm'];_0x2fbb=function(){return _0xf10c15;};return _0x2fbb();}

Module({pattern: 'test', fromMe: w, desc: '' }, (async (message, match) => {
    return await message.client.sendMessage(message.jid, {
        video: {
            url: fs.readFileSync("temp/feeling_high.mp4")
        },
        mimetype: "video/mp4",
        caption: "Memosa",
        thumbnail: await skbuffer(thumbnail)
    },{quoted:message.data});
}));
