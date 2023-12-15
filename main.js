const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas');

const christmasCountdown = () => {
    let now = new Date(), // data atual
        currentMonth = now.getMonth() + 1, // mês atual
        currentDay = now.getDate(); // dia do mês

    // Calcule o ano em que será o próximo Natal
    let nextChristmasYear = now.getFullYear()
    if(currentMonth == 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }

    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`,
        christmasDay = new Date(nextChristmasDate),
        timeLeft = christmasDay - now;

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    // Não calcule o tempo restante se for dia de Natal
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
        days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        seconds = Math.floor(timeLeft / 1000) % 60;
    }

    // mostrat quantos dias faltam
    numberData.innerHTML = days < 10 ? `0${days}` : days;
    textData.innerHTML = 'Dias';

    if(currentMonth == 12 && currentDay == 25) {
        titleData.style.display = 'none';
        msgChristmas.style.display = 'block';
        msgChristmas.innerHTML = 'Today is Dec 25, Merry Christmas'
    }

    // Mostrar dias restantes e remover mensagem de Natal
    if(currentMonth == 12 && currentDay == 26) {
        titleData.style.display = 'block';
        msgChristmas.style.display = 'none';
    }
}

setInterval(christmasCountdown, 1000);