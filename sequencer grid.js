
var fakecheckbox = document.querySelector('#checkboxes');
fakecheckbox.addEventListener('click', changing, false);

function changing(e) {
    if(e.target.id !== 'snareseq' && e.target.id !== 'kickseq' && e.target.id !== 'chordseq' && e.target.id !== 'bassseq') {
        if(e.target !== e.currentTarget) {
            var allClasses = e.target.classList;

            if(allClasses.contains('activated')) {
                allClasses.remove('activated');
            } else {
                allClasses.add('activated');
            }
        }
    }
}