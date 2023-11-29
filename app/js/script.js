const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const dark = document.getElementById('dark');
const light = document.getElementById('light');

if (localStorage.length > 0) {
    document.querySelector('.body').classList.add(localStorage.getItem('colorMode'));
    if (localStorage.getItem('colorMode') === 'dark') {
        dark.setAttribute('checked', '');
    } else {
        light.setAttribute('checked', '');
    }
} else {
    if (darkThemeMq.matches) {
        dark.setAttribute('checked', '');
    } else {
        light.setAttribute('checked', '');
    }
}

dark.addEventListener('click', function() {
    document.querySelector('.body').classList.remove('light');
    document.querySelector('.body').classList.add('dark');
    localStorage.setItem('colorMode', 'dark');
})

light.addEventListener('click', function() {
    document.querySelector('.body').classList.remove('dark');
    document.querySelector('.body').classList.add('light');
    localStorage.setItem('colorMode', 'light');
})