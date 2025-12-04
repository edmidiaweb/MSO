document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const links = document.querySelectorAll('nav a[href^="#"]');
    const contactForm = document.querySelector('.contact-form');
    const contactNameInput = document.getElementById('contact-name');
    const whatsappNumber = '5513978283404'; // Número MSO Assessoria

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

    // 3. Redirecionamento para WhatsApp com nome customizado
    if (contactForm && contactNameInput) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactNameInput.value.trim();
            
            if (name === "") {
                alert("Por favor, digite seu nome completo.");
                return;
            }

            // Mensagem de base
            let message = `Olá! Meu nome é ${name}. Vi o site da MSO Assessoria e gostaria de saber mais sobre os serviços.`;
            
            // Codifica a mensagem para URL
            const encodedMessage = encodeURIComponent(message);
            
            // Constrói o link do WhatsApp
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abre o link em uma nova aba
            window.open(whatsappLink, '_blank');
            
            // Opcional: Limpa o campo após o envio
            contactForm.reset();
        });
    }

});