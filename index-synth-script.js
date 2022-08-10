//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

const test = document.getElementById('test-button');

function playSound(button) {
  button.addEventListener("click", function (e) {
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    console.log("button was clicked")
  })
}

playSound(test);

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");