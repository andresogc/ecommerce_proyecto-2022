const bcrypt = require('bcrypt');


async function verifyPassword(){
    const myPass = 'admin123';
    const hash = 'asdmaslñd554';
    const isMatch = await bcrypt.compare(myPass,hash)
}


verifyPassword();