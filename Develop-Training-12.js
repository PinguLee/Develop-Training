const http = require('http');
const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question("입력해주세요 : ", function(answer) {
  console.log(`답변 : ${answer}`);
  rl.close();
});

http.createServer(function(request, response) {
  console.log(request.method);
  console.log(request.url);

  let writeHeadObject = {
    'Content-Type': 'text/html'
  }
  response.writeHead(200, writeHeadObject);

  fs.readFile("./public/index.html", function(err, data) {
    if (err) {
      console.error("파일을 읽지 못했습니다.");
    }else {
      response.end(data);
    }
  });

}).listen(8080);