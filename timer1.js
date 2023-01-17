let args = process.argv.slice(2); // accessed for index two

//function called for as many arguments as user inputs
for (let time of args) {
  if (time > 1) {
    setTimeout(() => { process.stdout.write('***'); }, time * 1000);
    console.log("\n");
  } else {
    console.log("Please enter a valid positive number. ");
  }
}

