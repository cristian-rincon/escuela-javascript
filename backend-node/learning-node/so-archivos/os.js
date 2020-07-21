const os = require('os');

/* Show cores of PC
console.log("CPU info: \n", os.cpus()); */

/* Show IP Address on linux, change lo if you are not using this on linux.
console.log("IP address", os.networkInterfaces().lo.map(i => i.address)); */

// Free memory
/* console.log(`Free memory: ${`${os.freemem()}`} bytes.`); */

// OS Version
console.log("OS Version: ", os.release());

// User Information
console.log("User information: ", os.userInfo());

