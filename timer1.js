//console.log(process.argv);
let arr = process.argv;

arr.forEach(element => {
  //console.log(element * 1);
  const delay = element * 1000;
  if (!isNaN(delay)) {
    if (delay >= 0) {

      console.log(delay);

      // let iteration = 0;
      // const interval = setInterval(() => {
        
        
      //   iteration++;
      //   if (iteration === animationBar.length + 2) {
      //     clearInterval(interval);
      //   }
      // }, 50);

      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);

    }
  }
});
