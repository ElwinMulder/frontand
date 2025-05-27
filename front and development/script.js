document.querySelector('.hamburger-toggle').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.toggle('active');
});

const toggleBtn = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedMode = localStorage.getItem('darkMode');

if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

