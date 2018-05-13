function poppinBottles() {

  var value = process.argv[2];
  var bottles = 0;
  var maxBottles = 0;
  var caps = 0;
  pops = 0

  do {
    while (value > 1) {
      pops += 1;
      value -= 2;
    }
    while (bottles > 1) {
      pops += 1;
      bottles -= 2;
    }
    while (caps > 3) {
      pops += 1;
      caps -= 4;
    }

    caps += pops;
    bottles += pops;

    maxBottles += pops;
    pops = 0;

  } while ((caps > 3) || (bottles > 1) || (pops > 0));

return maxBottles;

}
console.log(poppinBottles());