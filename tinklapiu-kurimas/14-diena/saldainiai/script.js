const getCandy = parseInt(prompt("Petriukas gavo saldainių:"));
const inday1 = parseInt(prompt("Per dieną suvalgė:"));
const inday2 = parseInt(prompt("Per dieną suvalgė:"));
const inday3 = parseInt(prompt("Per dieną suvalgė:"));
const inday4 = parseInt(prompt("Per dieną suvalgė:"));
const inday = [inday1, inday2, inday3, inday4];
let haveACandy = getCandy;
let i = 0;
let x = 0;
while (getCandy > 0) {
  if (haveACandy > inday[i]) {
    x++;
    haveACandy = haveACandy - inday[i];
  } else if (haveACandy < inday[i]) {
    console.log(
      `Petriukui saldainių užteks ${x} dienoms ir jam liks ${haveACandy} saldainiai`
    );
    break;
  }
  i++;
}
