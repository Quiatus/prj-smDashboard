const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const dark = document.getElementById('dark');
const light = document.getElementById('light');

if (darkThemeMq.matches) {
    dark.setAttribute('checked', '');
} else {
    light.setAttribute('checked', '');
}