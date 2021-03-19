const arpTypeId = document.getElementById("arptype");

const cBoxChord = document.getElementById('chordseq');
const cBoxBass = document.getElementById('bassseq');
const cBoxSnare = document.getElementById('snareseq');
const cBoxKick = document.getElementById('kickseq');
const cBoxPos = document.getElementById('posseq');

const row = document.querySelector('#cadence');


//--------------------Coloring
//color list items
function colorLi(li) {
    li.classList.add("color");

    if(li.classList.contains('empty')) {
        li.classList.add('current')
    }
}

//decolor list items
function decolorLi(li) {
    li.classList.remove("color");
    li.classList.remove('current');
}


let allRomans = document.querySelectorAll('.grid_roman>p');

function colorStages(input) {
    let number = input.classList[1];
    allRomans.forEach(item => item.classList.remove('color'))

    switch(number) {
        case "one": allRomans[0].classList.add('color'); break;
        case "two": allRomans[1].classList.add('color'); break;
        case "three": allRomans[2].classList.add('color'); break;
        case "four": allRomans[3].classList.add('color'); break;
        case "five": allRomans[4].classList.add('color'); break;
        case "six": allRomans[5].classList.add('color'); break;
        case "seven": allRomans[6].classList.add('color'); break;
    }
}

let modeList = document.querySelectorAll('.grid_modes>div');
let allStages = document.querySelectorAll('.grid_roman>p');

function colorModes(input) {
    let classesArray = Array.from(input.classList);

    if(classesArray.some(item => item == "r1")) modeList[0].classList.add('color');
    if(classesArray.some(item => item == "r2")) modeList[1].classList.add('color');
    if(classesArray.some(item => item == "r3")) modeList[2].classList.add('color');
    if(classesArray.some(item => item == "r4")) modeList[3].classList.add('color');
    if(classesArray.some(item => item == "r5")) modeList[4].classList.add('color');
    if(classesArray.some(item => item == "r6")) modeList[5].classList.add('color');
    if(classesArray.some(item => item == "r7")) modeList[6].classList.add('color');

}

let allChordsList = Array.from(document.querySelectorAll('.grid_chords1>div'));
let allChordsList2 = Array.from(document.querySelectorAll('.grid_chords2>div>div'));


function colorChords(input) {
    let chordName = input.textContent;


    if(allChordsList.findIndex(item => item.textContent == chordName) > -1){
        allChordsList
            .find(item => item.textContent == chordName)
            .classList.add('color');
    }

    if(allChordsList2.findIndex(item => item.textContent == chordName) > -1){
        allChordsList2
            .find(item => item.textContent == chordName)
            .classList.add('color');
    }
        
}


function sequencer(chordName, time) {
    let singleChordBox = cBoxChord.querySelector(`div:nth-child(${pace%plays +1})`);
    let singleBassBox = cBoxBass.querySelector(`div:nth-child(${pace%plays +1})`);


    if(singleChordBox.classList.contains('activated')){ playPiano(chordName); }

    if(singleBassBox.classList.contains('activated')){

        if(chordName == "F#m7b5") chordName = "Fsm7b5";
        if(chordName != '') {
            let containsActivated = synthmode.classList.contains('activated');
             if(containsActivated) synth.triggerAttackRelease(eval(chordName)[0], '8n', time) ;
            else  sampler.triggerAttackRelease(eval(chordName)[0], '8n', time);
        }
    }

}

function pacemaker(){
    let singlePosBox = cBoxPos.querySelector(`div:nth-child(${pace%plays +1})`);
    let countDivs = document.getElementsByClassName(`countdivs`);

    if(pace%plays == 0) [].forEach.call(countDivs, divs => divs.style.transform = "scale(1)")
    singlePosBox.style.transform = "scale(2)";
}



//gets triggered every beat-----------------------------------------------------
function repeat(time) {
    let liCount = document.querySelectorAll("#cadence > div.chords, #cadence > div.empty").length; //number of chords
    goon(liCount); //for coloring
    let input = row.querySelector(`div:nth-child(${position + 1})`); //storing specific div
    let chordName = input.textContent;


    colorStages(input);
    colorModes(input);
    colorChords(input);


    //keeps track of points   
    pacemaker();


    if(arpmode.classList.contains('activated')) {
        let rootNr = findRoot(chordName);

        let selArpType = arpTypeId.options[arpTypeId.selectedIndex].text;
        
        switch (selArpType) {
          case "Triad Up": note = arpie3.up[pace % arpie3.up.length]; break;
          case "Triad Down": note = arpie3.down[pace % arpie3.down.length]; break;
          case "Triad Double Up": note = arpie3.doubleup[pace % arpie3.doubleup.length]; break;
          case "Triad Double Down": note = arpie3.doubledown[pace % arpie3.doubledown.length]; break;
          case "Triad Up Down": note = arpie3.updown[pace % arpie3.updown.length]; break;
          case "Triad Down Up": note = arpie3.downup[pace % arpie3.downup.length]; break;
          case "Seventh Up": note = arpie4.up[pace % arpie4.up.length]; break;
          case "Seventh Down": note = arpie4.down[pace % arpie4.down.length]; break;
          case "Seventh Double Up": note = arpie4.doubleup[pace % arpie4.doubleup.length]; break;
          case "Seventh Double Down": note = arpie4.doubledown[pace % arpie4.doubledown.length]; break;
          case "Seventh Up Down": note = arpie4.updown[pace % arpie4.updown.length]; break;
          case "Seventh Down Up": note = arpie4.downup[pace % arpie4.downup.length]; break;
          case "Seventh Various": note = arpie4.various[pace % arpie4.various.length]; break;
        }
        playArp(chordName, note, rootNr, synth, time);

    } else {
        //sequencer: chords, bass, kick, snare
        sequencer(chordName, time);
    }

    let singleSnareBox = cBoxSnare.querySelector(`div:nth-child(${pace%plays +1})`);
    let singleKickBox = cBoxKick.querySelector(`div:nth-child(${pace%plays +1})`);

    if(singleSnareBox.classList.contains('activated')) { noiseSynth.triggerAttackRelease('8n', time); }
    if(singleKickBox.classList.contains('activated')) {bassSynth.triggerAttackRelease('c1', '16n', time); }


    colorLi(input);

    pace++;
}






