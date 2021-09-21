console.log('logging....');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러(심각)

//assert
console.assert(2==3, 'not same!'); // 거짓인 경우에만 출력
console.assert(2==2, 'same!');

// print object
const student = { name: 'winter', age:20, company: { name: 'AC'}};
console.log(student);
console.table(student);
console.dir(student, {'showHidden': true, colors:false, depth:0});

//measuring time
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop');

// counting 
function a() {
    console.count('a function'); // 호출된 횟수
}
a();
console.countReset('a function'); // count 초기화
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();