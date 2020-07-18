const sharp = require('sharp')

sharp('foto.jpg')
.resize(80)
.grayscale()
.toFile('foto_resized.jpg')