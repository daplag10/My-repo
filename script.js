tsParticles.load('particles',{particles:{number:{value:80},move:{enable:true,speed:1},size:{value:3}}});
document.getElementById('themeToggle').onclick=()=>document.body.classList.toggle('dark');
const lb=document.getElementById('lightbox');
const li=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery img').forEach(i=>i.onclick=()=>{lb.style.display='flex';li.src=i.src});
document.getElementById('close').onclick=()=>lb.style.display='none';