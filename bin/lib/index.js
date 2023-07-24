const fsExtra = require('fs-extra');
function replaceContentToFile(path, replaceValueMapping, userOptionAnswers) {
  fsExtra.readFile(path, 'utf-8', (err, data) => {
    if (err) { return }
    replaceValueMapping.forEach(item => (data = data.replace(new RegExp(item.v, 'g'), userOptionAnswers[item.k])));
    fsExtra.writeFile(path, data, 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      };
    });
  });
};

const handleError = err => {
  console.error(`Failed to create app folder '${appName}'. ${err.message}`);
  process.exit(1);
};

function createFolder(folderPath) {
  fsExtra.ensureDir(folderPath, (err) => {
    if (err) {
      throw Error(`error:${err}`)
    } else {
      console.log(`created:${folderPath}`);
    }
  });
}

function removeFolder(folderPath) {
  fsExtra.pathExists(folderPath,(err,exists)=>{
    if(exists){
      fsExtra.remove(folderPath)
      .then(() => {
        // console.log(`remove:${folderPath}`);
      })
      .catch((err) => {
        throw Error(`error:${err}`)
      });
    }else{
      throw Error(`error: No ${folderPath} file detected from the current location.`)
    }
  });
}

module.exports={
  replaceContentToFile,
  handleError,
  createFolder,
  removeFolder
}