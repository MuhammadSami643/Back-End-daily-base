const promise1=new Promise((res,rej){
    const a=2;
    if(a%2==0)
    {
        res("even");
    }
    else
    {
        rej("odd");
    }
});

promise1
.then((res)=>{
    console.log("Even");

}).catch((rej)=>{
    console.log("Odd")
}).finally(()=>{
console.log("finally");
});