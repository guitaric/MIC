let leftChordParentNode = document.querySelector('.grid_chords1');
let rightChordParentNode = document.querySelector('.grid_chords2');

let cadenceParentNode = document.querySelector('#cadence');
let trashcan = document.querySelector('#trashbutton');


//Drag and Drop EventListeners 

//Drag from left chords
leftChordParentNode.addEventListener('dragstart', function outerListenerChord(e) {

    cadenceParentNode.addEventListener('dragover', function(e) { e.preventDefault() });
    cadenceParentNode.addEventListener('drop', function dropOnCadence(e2) {
        if(e2.target.id !== "cadence") {
            if(e2.target.tagName == 'I') var correctedTarget = e2.target.parentNode;
            else var correctedTarget = e2.target;
    
            if(!correctedTarget.classList.contains('blocked')) {
                correctedTarget.className = '';
    
                // e2.target.id = e.target.id;
                correctedTarget.textContent = e.target.textContent;
                correctedTarget.setAttribute('draggable', true);
    
                var dragClasses = e.target.classList;
    
                for(let i=0; i < dragClasses.length; i++) {
                    correctedTarget.classList.add(dragClasses[i])
                }
            }
            cadenceParentNode.removeEventListener('drop', dropOnCadence);
        }


    });
});

//Drag from right chords
rightChordParentNode.addEventListener('dragstart', function outerListenerChord(e) {
    
    cadenceParentNode.addEventListener('dragover', function(e) { e.preventDefault() });
    cadenceParentNode.addEventListener('drop', function dropOnCadence(e2) {
        if(e2.target.id !== "cadence") {
            if(e2.target.tagName == 'I') var correctedTarget = e2.target.parentNode;
            else var correctedTarget = e2.target;
    
            if(!correctedTarget.classList.contains('blocked')) {
                correctedTarget.className = '';
    
                // e2.target.id = e.target.id;
                correctedTarget.textContent = e.target.textContent;
                correctedTarget.setAttribute('draggable', true);
    
                var dragClasses = e.target.classList;
    
                for(let i=0; i < dragClasses.length; i++) {
                    correctedTarget.classList.add(dragClasses[i])
                }
            }
            cadenceParentNode.removeEventListener('drop', dropOnCadence);
        }

    });
});

//from cadence---------------------------

//move and swap
cadenceParentNode.addEventListener('dragstart', function(e) {
    document.querySelector('#trashbutton').className = 'active';

    cadenceParentNode.addEventListener('dragover', function(e) { e.preventDefault() });
    cadenceParentNode.addEventListener('drop', function dropOnCadence(e2) {
        document.querySelector('#trashbutton').className = '';

        if(!e2.target.classList.contains('blocked')) {
            if(e2.target.classList.contains('empty')) {
                e2.target.classList = e.target.classList;
                e2.target.textContent = e.target.textContent;
                e2.target.setAttribute('draggable', true);

                e.target.className = '';
                e.target.classList.add('empty');
                e.target.textContent = '';
                e.target.innerHTML = '<i class="add_svg far fa-plus-square"></i>';
                e.target.removeAttribute('draggable');
            } 
        }
        cadenceParentNode.removeEventListener('drop', dropOnCadence);

    });
});

//remove from cadence
cadenceParentNode.addEventListener('dragstart', function(e) {
    document.querySelector('#trashbutton').className = 'active';

    trashcan.addEventListener('dragover', function(e2) { e2.preventDefault() });
    trashcan.addEventListener('drop', function dropOnTrashCan(e2) {
        document.querySelector('#trashbutton').className = '';

        e.target.className = '';
        e.target.classList.add('empty');
        e.target.textContent = '';
        e.target.innerHTML = '<i class="add_svg far fa-plus-square"></i>';
        e.target.removeAttribute('draggable');

    trashcan.removeEventListener('drop', dropOnTrashCan);
    });
});



// function addElement(e) { 

    // if(e.target !== e.currentTarget) {
    //   var chordlist = document.getElementById("cadence");
  
    //   if(chordlist.childElementCount < 8){  
    //     var clickedItem = e.target;
    //     var elem = document.createElement("li"); 
        
    //     //giving attrs and so on
    //     const allClasses = clickedItem.classList;
    //     console.log(allClasses)
    //     elem.classList.add(allClasses[0], allClasses[1]);
  
    //     elem.textContent = clickedItem.textContent;
    //     elem.setAttribute('draggable', 'true');
  
    //     //where to append
    //     chordlist.appendChild(elem);
    //   }
    // }
    // e.preventDefault();

//   }


