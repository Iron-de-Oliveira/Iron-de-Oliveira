const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// === Partículas descendo ===
const particles = [];
const numParticles = 100;

for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.5 + 1,
        speed: Math.random() * 1 + 0.6
    });
}

// === Estrelas passando na diagonal ===
const stars = [];
const numStars = 2;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 2
    });
}

function animate() {
    // Efeito de rastro
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, width, height);

    // === Partículas descendo ===
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(119, 235, 255, 0.8)';
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 5;
        ctx.fill();

        p.y += p.speed;

        if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
        }
    });

    // === Estrelas na diagonal ===
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowColor = '#00BFFF';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Movimento na diagonal (ângulo de 90 graus em relação às partículas que descem)
        s.x += s.speed;
        s.y -= s.speed;

        // Reinicia estrela se sair da tela
        if (s.x > width || s.y < 0) {
            s.x = Math.random() * width * 0.5; // renasce em uma faixa da esquerda
            s.y = height + Math.random() * height * 0.5; // renasce abaixo
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


function copy() {
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
function site02{
    window.location.href = "https://iron-de-oliveira.github.io/cura-engenharia/"
}

const front = document.getElementById('front');
const back = document.getElementById('back');

let angleFront = 0;
let angleBack = 0;

function animate2() {
    angleFront += 0.5; // Velocidade do front (45 graus)
    angleBack += 0.3;  // Velocidade do back (135 graus)

    front.style.transform = `translate(-50%, -50%) rotate(${45 + angleFront}deg)`;
    back.style.transform = `translate(-50%, -50%) rotate(${135 + angleBack}deg)`;

    requestAnimationFrame(animate2);
}

animate2();
