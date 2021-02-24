const stream = 
[
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];

const sampler = new Tone.Sampler({
	urls: {
		"A4": "A4.mp3"
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();



const arpie3 = {
    up: [0, 1, 2],
    down: [2, 1, 0],
    doubleup: [0, 0, 1, 1, 2, 2],
    doubledown: [2, 2, 1, 1, 0, 0],
    updown: [0, 1, 2, 1],
    downup: [2, 1, 0, 1] 
  }
  
  const arpie4 = {
    up: [0, 1, 2, 3],
    down: [3, 2, 1, 0],
    doubleup: [0, 0, 1, 1, 2, 2, 3, 3],
    doubledown: [3, 3, 2, 2, 1, 1, 0, 0],
    updown: [0, 1, 2, 3, 2, 1],
    downup: [3, 2, 1, 0, 1, 2],
    various: [0, 1, 2, 1, 3, 1, 2, 1]
  }

  


  