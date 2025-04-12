document.querySelectorAll('nav a').forEach(link => {
     link.EventListener('click',function(e) {
        e.preventDefault();
        const target = 
        document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior:'smooth'});
        }
     })
})