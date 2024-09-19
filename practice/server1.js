const http = require("http");
const fs = require("fs");
const url = require("url");
// Corrected usage of fs.writeFile
fs.writeFile('info.txt', 'Here is Information', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});



const myserver = http.createServer((req, res) => {

  const log= `${Date.now()} : ${req.url } New request recieved \n`;
const myurl=url.parse(req.url, true);
fs.appendFile('info.text',log,(err) => {
   switch(myurl.pathname){
    case'/':
    res.end(" HomePage")
    break;
    case '/about':
      res.end(" I am Shivani!! !!!!!!!!")
      break;
   }
    if (err) throw err;
    console.log('File has been saved!');
  })
  console.log("New request is received")
  res.end("Hello!!! I am server");
});

myserver.listen(8000, () => {
  console.log('Server is listening')
});
