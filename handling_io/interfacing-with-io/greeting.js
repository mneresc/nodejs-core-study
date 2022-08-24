/**
 * Reade and write to the console
 */

process.stdin.on('data', (data) => {
    /**
     * Capture the data from the console
     */
    const name = data.toString().trim().toUpperCase();

    /**
     * Write to the console
     */
    if(name === '') {
        process.stdout.write(`Digite algo, por favor`);
    }else{
        process.stdout.write(`Hello ${name}!`);
    }
    process.exit();
});