const whereAmI = () => {
    if (process.argv[2] === process.argv[3]) {
        console.log(`➤➤ storage (${process.argv[2]})`)
    }
    else {
        console.log(`➤➤ ${process.argv[2]}`)
    }
};

whereAmI();