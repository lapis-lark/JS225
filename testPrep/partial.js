function customPrompt(prompt) {
  return function (text) {
    console.log(`${prompt} ${text}`);
  }
}

let squigglePrompt = customPrompt('~~~');
let edgyPrompt = customPrompt('#[radical!?]~');

squigglePrompt('hello');
edgyPrompt('how are you today?')