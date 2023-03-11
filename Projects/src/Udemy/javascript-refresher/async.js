// const fetchData = (callback) => {
//     setTimeout(()=> {
//         callback('Done!');
//     }, 1500)
// }

const fetchData = (callback) => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
          resolve('Done!');
        }, 1500)    
    });
    return promise;
}


// const fetchData = (callback) => {
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             callback('Done!');
//         }, 1500)    
//     });
//     return promise;
// }


setTimeout(()=> {
    console.log("setTimeout is invoked");
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    })
},
1);

console.log("Hello!");