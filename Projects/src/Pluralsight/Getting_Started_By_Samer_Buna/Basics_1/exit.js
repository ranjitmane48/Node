setTimeout(()=> { process.exit()}, 2000);

process.on('exit', () =>{ 
    console.log('Process is exiting')
}
);

console.log('Hello');