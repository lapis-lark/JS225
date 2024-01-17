function makeGuitar(maker, model, strings = 6) {
  return {
    maker,
    model,
    strings,
    strum() {
      console.log('you strum the guitar. lovely music issues forth.');
    },
    info() {
      console.log(`this bad boy is a ${strings}-stringed ${maker} ${model}!!`);
    }
  }
}

let fender = makeGuitar('fender', 'zx turbo ultraaaa', 12);
fender.strum();
fender.info();