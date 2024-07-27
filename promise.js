const promise1 = new Promise((res, rej) => {
    const a = 3;
    if (a % 2 == 0) {
        res("even");
    }
    else {
        rej("odd");
    }
});

promise1
    .then((res) => {
        console.log("Even");

    }).catch((rej) => {
        console.log("Odd")
    }).finally(() => {
        console.log("finally");
    });



const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(new Date())
    }, 1000)


});

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(new Date())
    }, 2000)


});

const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        res(new Date())
    }, 4000)


});
const main = async () => {
    try {
        await promise2.then((res) => {
            console.log(res);
        })
        await promise3.then((res) => {
            console.log(res);
        })
        await promise4.then((res) => {
            console.log(res);
        })
    } catch (error) {
        console.log(error);
    }
};
main();