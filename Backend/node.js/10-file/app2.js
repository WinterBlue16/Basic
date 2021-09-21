const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8')
.then(data => console.log(data))
.catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ')
.catch(console.error);

// append text
fs.appendFile('./file.txt', 'Yo! Dream Coders! :) ')
.then(() => {
    //copy
fs.copyFile('./file.txt', './file2.txt')
.catch(console.error);
})
.catch(console.error);

// folder
fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);

// 모든 게 비동기(순서대로 실행되지 않는다) 처리되므로 순차적으로 처리하기 위해서는 then() 안에서 함수를 따로 적용해야 한다.