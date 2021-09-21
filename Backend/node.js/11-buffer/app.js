// Fixed-size chunk of memory
// array of integers, byte of data


const buf = Buffer.from('Hi');
console.log(buf); // unicode
console.log(buf.length);
console.log(buf[0]); // ascii
console.log(buf[1]);
console.log(buf.toString()); // default 'utf-8'

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast

buf2[0] = 72;
buf2[1] = 105;

// copy
buf2.copy(buf3);

console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());