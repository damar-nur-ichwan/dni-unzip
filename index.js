const fs = require('fs');
const unzipper = require('unzipper');

function Unzip(source, path) {
    return fs.createReadStream(source).pipe(unzipper.Extract({path})).promise().then(() => {return 'Unzip success!'}).catch(()=>{return 'File type is not zip!'})
}
module.exports = Unzip;


//path example:
//source == C:/Users/FUNNYROOM/TWYS/316543495417000202090.zip',
//path == C:/Users/FUNNYROOM/TWYS/result;
