/* 
%s string
%d number
%j json 
*/

// utilities();

const util = require('util')

const debuglog = util.debuglog("foo")
// On console type - NODE_DEBUG=foo node console-utils.js 
debuglog('hello from foo')

function utilities() {
    console.log("Un %s y un %s", "Elefante", "Perrito");
    console.info("Soy una información");
    console.warn("Peligro!!!");
    console.assert(96 === "96");
    console.trace("Hola");
}
