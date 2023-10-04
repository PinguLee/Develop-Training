const http = require('http');
const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

let name;

rl.question("이름 입력 : ", function (answer) {
  console.log(`${answer}님 반갑습니다.`);
  name = answer;
  rl.close();
});

let html = `<!DOCTYPE html>
  <html lang=\"ko\">
  <head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Document</title>
  </head>
  <body>
    <h1>
      ${name}님 반갑습니다.
    </h1>
  </body>
  </html>`;

fs.writeFile('./public/index.html', html, (err) => {
  if (err) {
    console.log('에러 : ', err);
  }
});


http.createServer(function (request, response) {
  let writeHeadObject = {
    'Content-Type': 'text/html'
  }
  response.writeHead(200, writeHeadObject);

  fs.readFile("./public/index.html", function (err, data) {
    if (err) {
      console.error("파일을 읽지 못했습니다.");
    } else {
      response.end(data);
    }
  });

}).listen(8080);