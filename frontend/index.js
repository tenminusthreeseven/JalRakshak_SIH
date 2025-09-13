function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');

    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    if (body.classList.contains('light-theme')) {
        btn.textContent = '🌙';
    } else {
        btn.textContent = '🌞';
    }
}

window.onload = function() {
    const btn = document.getElementById('themeToggleBtn');
    if (document.body.classList.contains('light-theme')) {
        btn.textContent = '🌙';
    } else {
        btn.textContent = '🌞';
    }

    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops = [];
    for (let i = 0; i < 500; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 20 + 10,
            velocity: Math.random() * 4 + 2
        });
    }



    animate();
};
