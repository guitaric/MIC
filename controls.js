document.addEventListener('DOMContentLoaded', () => {

//---------------------Controls

document.addEventListener('keydown', controls);

function controls(e) {

    //clear
    if(e.key === "c"){
        clear();
    }

    //play and pause
    if(e.key === " "){
        playpause(e);
    }
}


//play and pause button
let playNpause = document.getElementById("playbutton");
playNpause.addEventListener('click', playpause);
let play = false;

function playpause(e) {
        if(play == false) { //begin
            e.preventDefault();
            play = true;
            Tone.Transport.start();
            playNpause.textContent = "Pause (Space)";
        } else { //stop
            e.preventDefault();
            play = false;
            Tone.Transport.stop();
            playNpause.textContent = "Play (Space) ";
        }
}

//clearing cadence
let clearing = document.getElementById("clearbutton");
clearing.addEventListener('click', clear);


function clear() {
    console.log("clear")

    allStages.forEach(item => item.classList.add('color'));
    modeList.forEach(item => item.classList.remove('color'));
    allChordsList.forEach(item => item.classList.remove('color'));
    allChordsList2.forEach(item => item.classList.remove('color'));


    let loopvar = document.getElementById("loopNr").value;

    play = false;
    Tone.Transport.stop();
    playNpause.textContent = "Play (Space) ";
    position = 0;
    pace = 0;

    let loopArray = Array.from(cadenceParentNode.children);
    for(let i=0; i < cadenceParentNode.children.length; i++) {
        loopArray[i].id = 'c' + `${i+1}`;
        loopArray[i].className = '';
        loopArray[i].setAttribute('draggable', false);
        loopArray[i].textContent = '';
        if(i<loopvar) {
            loopArray[i].classList.add('empty');
            loopArray[i].classList.remove('blocked');
            loopArray[i].innerHTML = '<i class="add_svg far fa-plus-square"></i>';
        } 
        else {
            loopArray[i].classList.add('blocked');
            loopArray[i].classList.remove('empty') ; 
        }        
    }
}


loopNr.addEventListener('change', calcFrames);

function calcFrames() {
    let loopvar = document.getElementById("loopNr").value;

    if(loopvar <= position) {
        play = false;
        Tone.Transport.stop();
        playNpause.textContent = "Play (Space) ";
        position = 0;
        pace = 0;
    }

    let loopArray = Array.from(cadenceParentNode.children);
    for(let i=0; i < cadenceParentNode.children.length; i++) {
        if(i<loopvar) {
            if(!loopArray[i].classList.contains('chords')){
                loopArray[i].classList.add('empty');
                loopArray[i].classList.remove('blocked');
                loopArray[i].innerHTML = '<i class="add_svg far fa-plus-square"></i>';
            }
        } 
        else {
            loopArray[i].id = 'c' + `${i+1}`;
            loopArray[i].className = '';
            loopArray[i].setAttribute('draggable', false);
            loopArray[i].textContent = '';

            loopArray[i].classList.add('blocked');
        } 
        
    }
}

});