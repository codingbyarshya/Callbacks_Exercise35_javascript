const printHello = () => console.log("Hello");

const repeatHello = (callback) => setInterval(() => callback(), 1000);

repeatHello(printHello);

//to make it execute every 1 sec i used array function.