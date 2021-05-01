const fs = require('fs');
const unzipper = require('unzipper');

function Unzip(source, path) {
  if (source.includes('.zip')) {
    fs.createReadStream(source).pipe(unzipper.Extract({path}));
  } else {
    console.log('can not extract your file!');
  }
}
module.exports = Unzip;


//path example:
//source == C:/Users/FUNNYROOM/TWYS/316543495417000202090.zip',
//path == C:/Users/FUNNYROOM/TWYS/result;
