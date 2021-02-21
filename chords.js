const CMaj7 =     ["C3", "E3", "G3", "B3"];
const C7 =        ["C3", "Bb3", "E4", "G4"];
const Cmin7 =     ["C3", "Bb3", "Eb4", "G4"];
const Cm7b5 =     ["C3", "Bb3", "Eb4", "Gb4"];

const DbMaj7 =    [ "Db3", "Ab3", "C4", "F4"];
const D7 =        ["D3", "A3", "C4", "F#4"];
const Dmin7 =     ["D3", "A3", "C4", "F4"];
const Dm7b5 =     ["D3", "Ab3", "C4", "F4"];

const EbMaj7  =   ["Eb3", "G3", "Bb3", "D4"];
const Eb7 =       ["Eb3", "G3", "Bb3", "Db4"];
const Ebmin7 =    ["Eb3", "Gb3", "Bb3", "Db4"];
const Emin7 =     ["E3", "B3", "D4", "G4"];
const Em7b5 =     ["E3", "Bb3", "D4", "G4"];

const FMaj7 =     ["F3", "C3", "E4", "A4"];
const F7 =        ["F3", "C3", "Eb4", "A4"];
const Fmin7 =     ["F3", "C3", "Eb4", "Ab4"];
const Fsm7b5 =    ["F#3", "C3", "E4", "A4"];

const GMaj7 =     ["G2", "F#3", "B3", "D4"];
const GbMaj7 =    ["Gb2", "F3", "Bb3", "Db4"];
const G7 =        ["G2", "F3", "B3", "D4"];
const Gmin7 =     ["G2", "F3", "Bb3", "D4"];
const Gm7b5 =     ["G3", "Bb3", "Db4", "F4"];

const AbMaj7 =    ["Ab2", "G3", "C4", "Eb4"];
const Ab7 =       ["Ab2", "Gb3", "C4", "Eb4"];
const Amin7 =     ["A2", "G3", "C4", "E4"];
const Am7b5 =     ["A2", "G3", "C4", "Eb4"];

const BbMaj7 =    ["Bb2", "F3", "A3", "D4"];
const Bb7 =       ["Bb2", "F3", "Ab3", "D4"];
const Bmin7 =     ["B2", "F#3", "A3", "D4"];
const Bbmin7 =    ["Bb2", "F3", "Ab3", "Db4"];
const Bm7b5 =     ["B2", "F3", "A3", "D4"];

const E7 =        ["E3", "G#3", "B3", "D4"];
const A7 =        ["A2", "G3", "C#4", "E4"];
const B7 =        ["B2", "A3", "D#4", "F#4"];

const Caug =      ["C3", "E3", "G#3", "C4"];
const Faug =      ["F3", "A3", "C#4", "F4"];
const Daug =      ["D3", "F#3", "A#3", "D4"];
const Gaug =      ["G3", "B3", "D#4", "G4"];

const Cdim =      ["C3", "Eb3", "Gb3", "A4"];
const Fdim =      ["F3", "Ab3", "B3", "D4"];
const Gdim =      ["G3", "Bb3", "Db4", "E4"];


// function playCM7(){     synth.triggerAttackRelease(["C3", "E3", "G3", "B3"], 1); }


// function playCM7(){     sampler.triggerAttackRelease(["C3", "E3", "G3", "B3"], 1); }
// function playC7(){      sampler.triggerAttackRelease([ "C3", "Bb3", "E4", "G4"], 1); }
// function playCm7(){     sampler.triggerAttackRelease([ "C3", "Bb3", "Eb4", "G4"], 1); }
// function playChdim7(){  sampler.triggerAttackRelease([ "C3", "Bb3", "Eb4", "Gb4"], 1); }

//---D
// function playDbM7(){    sampler.triggerAttackRelease([ "Db3", "Ab3", "F4", "C5"], 1);}
// function playD7(){      sampler.triggerAttackRelease(["D3", "A3", "C4", "F#4"], 1);}
// function playDm7(){     sampler.triggerAttackRelease(["D3", "A3", "C4", "F4"], 1);}
// function playDhdim7(){  sampler.triggerAttackRelease(["D3", "Ab3", "C4", "F4"], 1);}

//---E
// function playEbM7(){    sampler.triggerAttackRelease(["Eb3", "G3", "Bb3", "D4"], 1);}
// function playEb7(){     sampler.triggerAttackRelease(["Eb3", "G3", "Bb3", "Db4"], 1);}
// function playEbm7(){    sampler.triggerAttackRelease(["Eb3", "Gb3", "Bb3", "Db4"], 1);}
// function playEm7(){     sampler.triggerAttackRelease(["E3", "B3", "D4", "G4"], 1);}
// function playEhdim7(){  sampler.triggerAttackRelease([ "E3", "Bb3", "D4", "G4"], 1);}

// //---F
// function playFM7(){     sampler.triggerAttackRelease([ "F3", "C3", "E4", "A4"], 1);}
// function playF7(){      sampler.triggerAttackRelease([ "F3", "C3", "Eb4", "A4"], 1);}
// function playFm7(){     sampler.triggerAttackRelease([ "F3", "C3", "Eb4", "Ab4"], 1);}
// function playFshdim7(){ sampler.triggerAttackRelease([ "F#3", "C3", "E4", "A4"], 1);}

// //---G
// function playGM7(){     sampler.triggerAttackRelease([ "G2", "F#3", "B4", "D5"], 1);}
// function playGbM7(){    sampler.triggerAttackRelease([ "Gb2", "F3", "Bb4", "Db5"], 1);}
// function playG7(){      sampler.triggerAttackRelease([ "G2", "F3", "B4", "D5"], 1);}
// function playGm7(){     sampler.triggerAttackRelease([ "G2", "F3", "Bb4", "D5"], 1);}
// function playGhdim7(){  sampler.triggerAttackRelease([ "G3", "Bb3", "Db4", "F4"], 1);}

// //---A
// function playAbM7(){    sampler.triggerAttackRelease([ "Ab2", "G3", "Eb4", "C5"], 1);}
// function playAb7(){     sampler.triggerAttackRelease([ "Ab2", "Gb3", "Eb4", "C5"], 1);}
// function playAm7(){     sampler.triggerAttackRelease([ "A2", "G3", "C4", "E4"], 1);}
// function playAhdim7(){  sampler.triggerAttackRelease([ "A2", "G3", "Eb4", "C5"], 1);}

// //---B
// function playBbM7(){    sampler.triggerAttackRelease([ "Bb2", "F3", "A3", "D4"], 1);}
// function playBb7(){     sampler.triggerAttackRelease([ "Bb2", "F3", "Ab3", "D4"], 1);}
// function playBm7(){     sampler.triggerAttackRelease([ "B2", "F#3", "A3", "D4"], 1);}
// function playBbm7(){    sampler.triggerAttackRelease([ "Bb2", "F3", "Ab3", "Db4"], 1);}
// function playBhdim7(){  sampler.triggerAttackRelease([ "B2", "F3", "A3", "D4"], 1);}


// function playE7(){      sampler.triggerAttackRelease([ "E3", "G#3", "B3", "D4"], 1); }
// function playA7(){      sampler.triggerAttackRelease([ "A2", "C#3", "E3", "G3"], 1); }
// function playB7(){      sampler.triggerAttackRelease([ "B2", "D#3", "F#3", "A3"], 1); }

// function playCaug(){    sampler.triggerAttackRelease([ "C3", "E3", "G#3", "C4"], 1); }
// function playFaug(){    sampler.triggerAttackRelease([ "F3", "A3", "C#4", "F4"], 1); }
// function playDaug(){    sampler.triggerAttackRelease([ "D3", "F#3", "A#3", "D4"], 1); }
// function playGaug(){    sampler.triggerAttackRelease([ "G3", "B3", "D#4", "G4"], 1); }

// function playCdim(){   sampler.triggerAttackRelease([ "C3", "Eb3", "Gb3", "A4"], 1); }
// function playFdim(){   sampler.triggerAttackRelease([ "F3", "Ab3", "B3", "D4"], 1); }
// function playGdim(){   sampler.triggerAttackRelease([ "G3", "Bb3", "Db4", "E4"], 1); }


