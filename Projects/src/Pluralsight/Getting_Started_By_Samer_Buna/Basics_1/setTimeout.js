const log = delay => {
    console.log('hello after ' + delay + ' seconds');
}

setTimeout(log, 4 * 1000, 4);
setTimeout(log, 8 * 1000, 8);

