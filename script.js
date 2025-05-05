document.addEventListener('DOMContentLoaded', function() {
    const btnAbrir = document.getElementById('abrir-modal');
    const btnFechar = document.getElementById('fechar-modal');
    const modal = document.getElementById('modal-login');
    const formLogin = document.getElementById('form-login');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailErro = document.getElementById('email-erro');
    const senhaErro = document.getElementById('senha-erro');

    btnAbrir.addEventListener('click', function() {
        abrirModal();
    });

    btnFechar.addEventListener('click', function() {
        fecharModal();
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('ativo')) {
            fecharModal();
        }
    });

    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailErro.textContent = '';
        senhaErro.textContent = '';
        emailInput.classList.remove('erro');
        senhaInput.classList.remove('erro');
        
        let valido = true;
        
        if (!emailInput.value) {
            emailErro.textContent = 'Por favor, digite seu e-mail';
            emailInput.classList.add('erro');
            valido = false;
        } else if (!validarEmail(emailInput.value)) {
            emailErro.textContent = 'Digite um e-mail válido';
            emailInput.classList.add('erro');
            valido = false;
        }
        
        if (!senhaInput.value) {
            senhaErro.textContent = 'Por favor, digite sua senha';
            senhaInput.classList.add('erro');
            valido = false;
        } else if (senhaInput.value.length < 6) {
            senhaErro.textContent = 'A senha deve ter pelo menos 6 caracteres';
            senhaInput.classList.add('erro');
            valido = false;
        }
        
        if (valido) {
            console.log('Formulário válido, enviando...');
            alert('Login realizado com sucesso!');
            fecharModal();
            formLogin.reset();
        }
    });

    function abrirModal() {
        modal.classList.add('ativo');
        document.body.style.overflow = 'hidden'; 
        emailInput.focus();
    }

    function fecharModal() {
        modal.classList.remove('ativo');
        document.body.style.overflow = 'auto'; 
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});