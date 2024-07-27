function clock() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(new Date());
            res();
        }, 0);
    });
}

async function run() {
    while (true) {
        await clock();
        await new Promise(res => setTimeout(res, 1000));
      }
}

run();