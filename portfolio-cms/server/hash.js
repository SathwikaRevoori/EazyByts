const bcrypt = require('bcryptjs');
const passwordHash = bcrypt.hashSync('yourpassword', 10);
console.log('Hashed Password:', passwordHash);
