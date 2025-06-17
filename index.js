const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 1 + 0.6
        });
    }

    function animate() {
        // Efeito de rastro
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'; // Quanto menor, mais longo o rastro
        ctx.fillRect(0, 0, width, height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

            // Cor Neon com mais brilho
            ctx.fillStyle = 'rgba(0, 255, 234, 0.8)';
            ctx.shadowColor = '#00FFEA';
            ctx.shadowBlur = 10; // blur para ficar mais neon
            ctx.fill();

            p.y += p.speed;

            if (p.y > height) {
                p.y = 0;
                p.x = Math.random() * width;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

function copy(email) {
    const texto = document.getElementById("email").innerText;

    navigator.clipboard.writeText(texto)
        .then(() => {
            document.getElementById("msg_copy").innerText = "email copiado ✔";
            document.getElementById("msg_copy").style.color = "rgb(52, 255, 52)"
            document.getElementById("msg_copy").style.filter = " drop-shadow(0px 0px 6px white)"

            setTimeout(() => {
                document.getElementById("msg_copy").innerText = "email copiado ✔";
                document.getElementById("msg_copy").style.color = "rgb(52, 255, 52)"
                document.getElementById("msg_copy").style.filter = " drop-shadow(0px 0px 3px white)"
            }, 300);
            setTimeout(() => {
                document.getElementById("msg_copy").innerText = "email copiado ✔";
                document.getElementById("msg_copy").style.color = "rgb(52, 255, 52)"
                document.getElementById("msg_copy").style.filter = " drop-shadow(0px 0px 0px white)"
            }, 600);
            setTimeout(() => {
                document.getElementById("msg_copy").innerText = "email copiado ✔";
                document.getElementById("msg_copy").style.color = "rgb(52, 255, 52)"
                document.getElementById("msg_copy").style.filter = " drop-shadow(0px 0px 3px white)"
            }, 900);
            setTimeout(() => {
                document.getElementById("msg_copy").innerText = "email copiado ✔";
                document.getElementById("msg_copy").style.color = "rgb(52, 255, 52)"
                document.getElementById("msg_copy").style.filter = " drop-shadow(0px 0px 6px white)"
            }, 1200);



            setTimeout(() => {
                document.getElementById("msg_copy").innerText = ""
            }, 2000) ;
            
        })
        .catch(err => {
            console.error('Erro ao copiar', err);
        });
}

// links para outros sites
function site01(){
    window.location.href = "https://iron-de-oliveira.github.io/trabalhos/"
}