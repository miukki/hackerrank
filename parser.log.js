var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   const list = data.toString();
   const newList =  list.split('\n').map(s => s.match(/([\w-]+).(gif|GIF) [^"]+" (\d+)/m) ? s : undefined);
   
   fs.writeFile('./output.txt', newList.join('\n'), err => {
    if (err) return console.log(err);
    console.log("Successfully Written to File.");
   })
   
});
console.log("Program Ended");