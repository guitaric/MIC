var gridTitle = document.querySelector('.grid_title');
var displayedText = document.querySelector('.grid_description');
var questionIcon = document.querySelector('#questionbutton');
var InfoIcon = document.querySelector('#infobutton');
var howtoText = document.querySelector('#howtoText');
var whatText = document.querySelector('#whatText');
var aboutText = document.querySelector('#aboutText')



gridTitle.addEventListener('click', (e) => {
    if(e.target.id == "infobutton" || e.target.classList.contains('info')) {
        aboutText.classList.add('invisible');
        whatText.classList.add('invisible');
        howtoText.classList.remove('invisible')
    } else if(e.target.id == 'questionbutton' || e.target.classList.contains('question')) {
        whatText.classList.remove('invisible');
        howtoText.classList.add('invisible');
        aboutText.classList.add('invisible');
    } else if(e.target.id == 'aboutbutton' || e.target.classList.contains('about')) {
        whatText.classList.add('invisible');
        howtoText.classList.add('invisible');
        aboutText.classList.remove('invisible');
    }
})