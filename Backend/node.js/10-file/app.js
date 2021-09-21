const { error } = require('console');
const fs = require('fs');

// 모둔 api는 3가지로 나뉨!
// rename(...., callback(error, data)) => 콜백 함수 전달(에러 or data 전달) 
// try { renameSync(....)} catch(e) { } => 콜백 함수 전달 x, 줄이 끝날 때까지 넘어가지 않음, 에러를 따로 표현하지 않으므로 반드시 try, catch 사용
// promise.rename().then().catch(0)

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error)
}

console.log('hello'); // 어떤 코드 아래로 넘어가지 않을 때 '죽었다'고 표현함


fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('hello');

fs.promises
.rename('./text2.txt', './text-new.txt')
.then(() => console.log('Done!'))
.catch(console.error) // (error) => console.log(error)