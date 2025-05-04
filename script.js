document.addEventListener('DOMContentLoaded', function() {
    const btnAbrir = document.getElementById('abrir-modal');
    const btnFechar = document.getElementById('fechar-modal');
    const modal = document.getElementById('modal-login');
    const formLogin = document.getElementById('form-login');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailErro = document.getElementById('email-erro');
    const senhaErro = document.getElementById('senha-erro');

    // Abrir modal
    btnAbrir.addEventListener('click', function() {
        abrirModal();
    });

    // Fechar modal
    btnFechar.addEventListener('click', function() {
        fecharModal();
    });

    // Fechar ao clicar fora do modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('ativo')) {
            fecharModal();
        }
    });

    // Validação do formulário
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetar erros
        emailErro.textContent = '';
        senhaErro.textContent = '';
        emailInput.classList.remove('erro');
        senhaInput.classList.remove('erro');
        
        let valido = true;
        
        // Validar email
        if (!emailInput.value) {
            emailErro.textContent = 'Por favor, digite seu e-mail';
            emailInput.classList.add('erro');
            valido = false;
        } else if (!validarEmail(emailInput.value)) {
            emailErro.textContent = 'Digite um e-mail válido';
            emailInput.classList.add('erro');
            valido = false;
        }
        
        // Validar senha
        if (!senhaInput.value) {
            senhaErro.textContent = 'Por favor, digite sua senha';
            senhaInput.classList.add('erro');
            valido = false;
        } else if (senhaInput.value.length < 6) {
            senhaErro.textContent = 'A senha deve ter pelo menos 6 caracteres';
            senhaInput.classList.add('erro');
            valido = false;
        }
        
        // Se tudo estiver válido
        if (valido) {
            // Simular envio (substitua por sua lógica real)
            console.log('Formulário válido, enviando...');
            alert('Login realizado com sucesso!');
            fecharModal();
            formLogin.reset();
        }
    });

    // Função para abrir modal
    function abrirModal() {
        modal.classList.add('ativo');
        document.body.style.overflow = 'hidden'; // Impede rolagem da página
        emailInput.focus();
    }

    // Função para fechar modal
    function fecharModal() {
        modal.classList.remove('ativo');
        document.body.style.overflow = 'auto'; // Restaura rolagem
    }

    // Validar formato de e-mail
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});