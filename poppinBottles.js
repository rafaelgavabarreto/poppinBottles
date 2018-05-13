function poppinBottles() {

  var value = process.argv[2];
  var bottles = 0;
  var maxBottles = 0;
  var caps = 0;
  var maxCaps = 0;
  var pops = 0;
  var maxPops = 0;

  do {
    while (value > 1) {
      pops += 1;
      value -= 2;
    }
    while (bottles > 1) {
      pops += 1;
      maxBottles += 1;
      bottles -= 2;
    }
    while (caps > 3) {
      pops += 1;
      maxCaps += 1;
      caps -= 4;
    }

    caps += pops;
    bottles += pops;

    maxPops += pops;

    pops = 0;

  } while ((caps > 3) || (bottles > 1) || (pops > 0));

console.log('Total Bottles:',maxPops);
console.log('Remaining Bottles:',bottles);
console.log('Remaining Caps:',caps);
console.log('Total Earned:\n'+'Bottles:',maxBottles,'\nCaps:',maxCaps);

}
poppinBottles();