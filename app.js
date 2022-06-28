const fs = require('fs');
const fsPromises = fs.promises;
const { exec, execSync } = require('child_process');
const path = require('path');

console.time('timer');
console.log('Time start: ' + new Date());
const tiktokLinks = fs.readFileSync('links.txt', 'utf-8');
const handleDownload = async () => tiktokLinks.split(/\r?\n/).forEach(async (line) => {
     await execSync(`node downloader.js ${JSON.stringify(line)}`, (error, stdout, stderr) => { console.log(error) })
});
handleDownload()
// .then(() => {
//      const getVideosFromDirectory = async () => {
//           try {
//                let fileNames = await fs.promises.readdir(path.resolve('/Users/autonome/Downloads'));
//                let files = fileNames.filter(video => video && video.includes('mp4'));
//                return files;
//           }
//           catch (err) {
//                throw err;
//           }
//      }
//      let vids = getVideosFromDirectory().then(data =>
//           data.forEach(video => exec(`handbrakecli -i ` + JSON.stringify(`/Users/autonome/Downloads/${video}`) + ` --output "/Users/autonome/Movies/Today/${video}" --cfr --rate 30`, (err, stdout, stderr) => {
//           }))
//      )
// });
console.timeEnd('timer', 'Time end: ' + new Date());