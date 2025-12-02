document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav a[href^="#"]');

    // 1. Efeito de scroll suave para links âncora
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcula a posição do topo da seção e subtrai a altura do header fixo
                const headerHeight = header.offsetHeight;
                const topPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Efeito de sombra/borda no header ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 3. Simulação de envio do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! A MSO Assessoria entrará em contato em breve.');
            contactForm.reset();
        });
    }

});