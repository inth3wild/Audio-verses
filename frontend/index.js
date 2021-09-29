
new Typewriter('#typewriter', {
    strings: ['John 3:16', 'Luke chapter 7 verse 6 to 10', 'The Birth of Jesus Christ', 'Forgiveness'],
    autoStart: true,
    loop: true
});

let darkModeBtn = document.querySelector('#dark')
let lightModeBtn = document.querySelector('#light')
let context = 'verse';


document.body.addEventListener('click', (e) => {
    if (e.target.parentElement.id === 'dark') {
        document.body.style.backgroundColor = '#121212'
        document.body.classList.add('text-white')
        document.querySelector('.navbar').classList.add('navbar-dark')

        cardElements = document.querySelectorAll('.card')
        cardArray = Array.from(cardElements)
        cardArray.forEach(card => {
            card.classList.add('bg-dark')
        });
    }
    else if (e.target.parentElement.id === 'light'){
        document.body.removeAttribute('style')
        document.body.classList.remove('text-white')
        document.querySelector('.navbar').classList.remove('navbar-dark')

        cardElements = document.querySelectorAll('.card')
        cardArray = Array.from(cardElements)
        cardArray.forEach(card => {
            card.classList.remove('bg-dark')
        });
    }
    else if (e.target.id === 'switch-context') {
        if (context === 'verse') {
            // Switch to query context
            document.querySelector('#verse-result').style.display = 'none';
            document.querySelector('#query-result').style.display = 'block';
            context = 'query';
        } else {
            // Switch back to verse context
            document.querySelector('#verse-result').style.display = 'block';
            document.querySelector('#query-result').style.display = 'none';
            context = 'verse';
        }
    }
})


// Do format for search results not chapter verse