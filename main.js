const glass = document.getElementById('glass');
const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } });
tl.from('.contianer', { opacity: 0, delay: 1, duration: 1 }, '-=1.5')
    .from('.container', { y: '10%', delay: 0, duration: 1 })
    .from('h1', { y: 10, clipPath: 'inset(0 0 100% 0)' }, "-=1")
    .from('p', { y: 30, clipPath: 'inset(0 0 100% 0)' }, "-=1");