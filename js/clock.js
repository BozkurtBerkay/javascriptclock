const myClock = document.getElementById('myClock');
const myName = document.getElementById('myName');

const name = prompt('Enter your name');
myName.innerHTML = name;

const weeks = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

const showTime = () => {
    const date = new Date();
    myClock.innerHTML = date.toLocaleTimeString() + " " + weeks[date.getDay()];
}

setInterval(showTime, 1000);