const promise1 = new Promise((res) => {
    setInterval((res) => {
           console.log(new Date()); 

},1000);
});

const main =  () => {
    try {
        promise1.then((res) => {
            console.log(res);

    });
 }
  catch (error) {
        console.log(error);
    }
};
main();