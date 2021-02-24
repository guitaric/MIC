document.addEventListener('DOMContentLoaded', () => {

    //Beat
    bassSynth = new Tone.MembraneSynth().toDestination();

    //snare
    noiseSynth = new Tone.NoiseSynth().toDestination();


    //Type of Synthesizer
    const synthtype = document.getElementById("stype");
    
    synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
    const gain = new Tone.Gain(0.1);
    gain.toDestination();
    synth.connect(gain);

    synthtype.addEventListener("change", changestype);
    
    function changestype() {
      let x = synthtype.options[synthtype.selectedIndex].textContent;
      if(x == "AMSynth") synth = new Tone.PolySynth(Tone.AMSynth).toDestination();
      else if(x == "FMSynth") synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
      else if(x == "MembraneSynth") synth = new Tone.PolySynth(Tone.MembraneSynth).toDestination();
      else synth = new Tone.PolySynth(Tone.Synth).toDestination();

      const gain = new Tone.Gain(0.1);
      gain.toDestination();
      synth.connect(gain);
    }
    
    
    //Bpm
    let bpmvar = document.getElementById("bpm").value;
    Tone.Transport.bpm.value = bpmvar;
    
    bpm.addEventListener("change", updateBPM);
    
    function updateBPM() {
      Tone.Transport.bpm.value = bpm.value;
    }
    

    // Clock
    Tone.Transport.scheduleRepeat(time => {
      repeat(time);
    }, '16n');
    
    });
    
