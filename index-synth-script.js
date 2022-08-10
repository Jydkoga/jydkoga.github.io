//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

const test = document.getElementById('test-button');

const melody =
  [{ note: "E5", duration: "8n", timing: 0 },
  { note: "D#5", duration: "8n", timing: 0.25 },
  { note: "E5", duration: "8n", timing: 0.5 },
  { note: "D#5", duration: "8n", timing: 0.75 },
  { note: "E5", duration: "8n", timing: 1 },
  { note: "B4", duration: "8n", timing: 1.25 }]

function playSound(button) {
  button.addEventListener("click", function (e) {
    //play the melody:
    melody.forEach(tune => {
      const now = Tone.now();
      synth.triggerAttackRelease(tune.note, tune.duration, now + tune.timing);
    })


    // melody.forEach(tune => {
    //   const now = Tone.now()
    //   synth.triggerAttackRelease(tune.note, tune.duration, now + tune.timing)
    // })
    console.log("button clicked")
  })
}

playSound(test);

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");