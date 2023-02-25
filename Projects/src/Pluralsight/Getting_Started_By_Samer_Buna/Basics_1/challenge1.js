let i= 0;
let timerId = setInterval(()=> {
    i += 1;
    if(i === 5)
    {
       
        console.log("Done");
        clearInterval(timerId);
    }
    else
    {
        console.log("hello world");
    } 
}, 
1000);