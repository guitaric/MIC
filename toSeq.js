// grab element id
var gridChords = document.querySelector('.grid_chords1');
gridChords.addEventListener("click", playTheChord);

var gridChords2 = document.querySelector('.grid_chords2');
gridChords2.addEventListener("click", playTheChord);

//plays chord by clicking once
function playTheChord(e) {
    var chordText = e.target.textContent;

    //special chord naming
    if(chordText == "F#m7b5") chordText = "Fsm7b5";
    if(chordText == "C°") chordText = "Cdim";
    if(chordText == "F°") chordText = "Fdim";
    if(chordText == "G°") chordText = "Gdim";

  if(e.target !== e.currentTarget) {

    var c = synthmode.classList.contains('activated');
    if(c) synth.triggerAttackRelease(eval(chordText), 1) 
    else  sampler.triggerAttackRelease(eval(chordText), 1)
  }
}


