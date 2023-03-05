const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
// const pwd = spawn('pwd');
// pwd.stdout.pipe(process.stdout);

const { HOME } = process.env;
const cat = spawn('cat', [`{HOME}/.bash_profile`]);