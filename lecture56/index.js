let firstPromise=new Promise((resolve,reject)=>{
    console.log("understanding promises");
    resolve(1001);
});
let secondPromise=new Promise((resolve,reject)=>{
    console.log("understanding promises");
    reject(new Error("Internal Server Error"));
});
let thirdPromise=new Promise((resolve,reject)=>{
    setTimeout(function sayMyName(){
        console.log("my name is aamina");
    },15000);
    resolve(1);
    }
);
let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("promise is resolved");

    }
    else{
        reject("promise is rejected");
    }
});
promise1.then((message)=>{
    console.log("the then segment executes"+message);
}).catch((error)=>{
    console.log("the catch segment executes"+error);
})
//promise chaining
let promise2=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("promise is fulfilled");

    }
    else{
        reject("promise is rejected");
    }
});
promise2.then((message)=>{
    console.log("first message:"+message);
    return "promise fulfilled second message";
}).then((message)=>{
    console.log("second message:"+message);
    return "promise fulfilled third message";
}).then((message)=>{
    console.log("third message"+message);
}).finally((message)=>{
    console.log("the finally segment executes regardless of resolve or reject");
});

//concurrently executing promises
let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"promise 3 resolved");
})
let promise4=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"promise 4 is resolved");
})
let promise5=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"promise 5 is resolved");
})
Promise.all([promise3,promise4.promise5]).then((value)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("error:"+error);
})