const bcrypt = require('bcrypt')


const pass = 'mypasswordseguro';

bcrypt.hash(pass, 7, function (err, hash) {
  console.log(hash);
  
  bcrypt.compare(pass,hash, function (err, res) {
    if (err) {
      console.log(err);
    }
    console.log(res);
    
  })
})