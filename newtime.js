const plays = 16;
var pace = 0;
var position = 0;
var chordLen = document.querySelectorAll("#cadence li").length;

function updateStep() {
  step = stepId.value;
}


//finding the root of a chord
function findRoot(inp) {

    //find root note of chord------------------------
    if(inp.includes("C")) var root = 12;
    else if(inp.includes("Db")) var root = 13;
    else if(inp.includes("D") && !inp.includes("Db")) var root = 14;
    else if(inp.includes("Eb")) var root = 15;
    else if(inp.includes("E") && !inp.includes("Eb")) var root = 16;
    else if(inp.includes("F") && !inp.includes("F#")) var root = 17;
    else if(inp.includes("F#")) var root = 18;
    else if(inp.includes("Gb")) var root = 18;
    else if(inp.includes("G") && !inp.includes("Gb")) var root = 7;
    else if(inp.includes("Ab")) var root = 8;
    else if(inp.includes("A") && !inp.includes("Ab")) var root = 9;
    else if(inp.includes("Bb")) var root = 10;
    else if(inp.includes("B") && !inp.includes("Bb")) var root = 11;

    root = root + 12;
    return root;
}


//play the arpeggiator-----------------------------
function playArp(chordName, note, root, synth, time) {
  if(chordName.includes("Maj")) {
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1) synth.triggerAttackRelease(stream[root + 4], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 7], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 11], '8n', time);
  }
  else if(chordName.includes("min")) {
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1)synth.triggerAttackRelease(stream[root + 3], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 7], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 10], '8n', time);
  }
  else if(chordName.includes("b5")) {
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1) synth.triggerAttackRelease(stream[root + 3], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 6], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 10], '8n', time);
  }
  else if(chordName.includes("aug")) {
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1) synth.triggerAttackRelease(stream[root + 4], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 8], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 12], '8n', time);
  }
  else if(chordName.includes("°")) {
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1) synth.triggerAttackRelease(stream[root + 3], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 6], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 9], '8n', time);
  }
  else { //seventh chord
    if(note == 0) synth.triggerAttackRelease(stream[root], '8n', time);
    if(note == 1) synth.triggerAttackRelease(stream[root + 4], '8n', time);
    if(note == 2) synth.triggerAttackRelease(stream[root + 7], '8n', time);
    if(note == 3) synth.triggerAttackRelease(stream[root + 10], '8n', time);
  }
}

//play the bass note--------------------------------
function playBass(root, synth, time) {
  let bnote = bassnote[pace % bassnote.length];

  if(bnote == 0) {
    sampler.triggerAttackRelease(stream[root-12], '8n', time);
  }
}


//play the chord that is in cadence
var synthmode = document.querySelector('#synthmode');
var arptext = document.querySelector('#arptext');
var arpmode = document.querySelector('#arpmode');
var arptype = document.querySelector('#arptype');
var chordtext = document.querySelector('#chordtext');
var basstext = document.querySelector('#basstext');




synthmode.addEventListener('click', (e) => {
    var allClasses = e.target.classList;

    if(allClasses.contains('activated')) {
        allClasses.remove('activated');
        arptext.classList.add('deactivated');
        arptype.classList.add('deactivated');
        arpmode.classList.remove('activated'); 
        chordtext.classList.remove('deactivated');
        basstext.classList.remove('deactivated');  


    } else {
        allClasses.add('activated');
        arptext.classList.remove('deactivated');
        arptype.classList.remove('deactivated');
    }
})

//play with the arpeggiator
    
arpmode.addEventListener('click', (e) => {
    var allClasses = e.target.classList;

    if(synthmode.classList.contains('activated')){
      if(allClasses.contains('activated')) {
        allClasses.remove('activated');
        chordtext.classList.remove('deactivated');
        basstext.classList.remove('deactivated');
      } else {
        allClasses.add('activated');
        chordtext.classList.add('deactivated');
        basstext.classList.add('deactivated');
      }
    }

})


function playPiano(chordName) {

  if(chordName == "F#m7b5") chordName = "Fsm7b5";
  if(chordName == "C°") chordName = "Cdim";
  if(chordName == "F°") chordName = "Fdim";
  if(chordName == "G°") chordName = "Gdim";

  var c = synthmode.classList.contains('activated');
  if(chordName != '') {
    if(c) synth.triggerAttackRelease(eval(chordName), '4n') ;
    else if(c == false) sampler.triggerAttackRelease(eval(chordName), '4n');
  }

}


function goon(count) {
  if(pace >= plays){
    if(Number.isInteger(pace/plays)) {
      position++;

      //decolor previous element
      var prev = row.querySelector(`div:nth-child(${position})`);
      decolorLi(prev);

      modeList.forEach(item => item.classList.remove('color'));

      allChordsList.forEach(item => item.classList.remove('color'));
      allChordsList2.forEach(item => item.classList.remove('color'));


      //reset
      if(position/count == 1){
        position = 0;
      }
    }
  }
}



