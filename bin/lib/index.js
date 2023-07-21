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

module.exports={
  replaceContentToFile,
  handleError
}