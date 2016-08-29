/* Hack para setear WM_CLASS */
process.mainModule.exports.init(require('nwjs-hack').set_wmclass.bind(null, "huayra2048", true));
