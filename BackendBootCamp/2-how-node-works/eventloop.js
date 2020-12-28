const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log("timer 1 finished"), 0); 
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile('test-file.txt', () => {
    console.log("I/O finished");
    console.log("--------------");

    setTimeout(() => console.log("timer 2 finished"), 0); 
    setTimeout(() => console.log("timer 3 finished"), 3000); 
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(()=> console.log("Process next tick"));
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now() - start, "Password Encrypted");
    } );
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now() - start, "Password Encrypted");
    } );
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now() - start, "Password Encrypted");
    } );
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now() - start, "Password Encrypted");
    } );
});

console.log("Top Level Code");


/** My projected order ( I was correct)
 * 1.Top level
 * 2. Timer 1
 * 3. Set Immediate
 * 4. Timer 2 Finished
 * 5. immediate 2 finished
 * 6. file io
 * 7. timer 3 finished
 */





