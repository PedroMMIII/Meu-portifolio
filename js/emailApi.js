function alertErro(text) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: text,
  });
}

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('DnhMt1YzXLquNAihp');

  // Seleciona o formulário
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o reload da página

    // Captura os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regex para validar e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validação dos campos
    if (!name) {
      alertErro('Por favor insira seu nome');
      return;
    }

    if (!emailRegex.test(email)) {
      alertErro('Por favor, insira um e-mail válido.');
      return;
    }

    if (!message) {
      alertErro('A mensagem não pode estar vazia.');
      return;
    }

    // Configuração dos dados para o EmailJS
    const params = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Envia o e-mail usando EmailJS
    emailjs
      .send('service_iyjtv47', 'template_bws3glb', params)
      .then(function () {
        Swal.fire({
          title: 'Email enviado!',
          text: 'Seu email foi enviado com sucesso!',
          icon: 'success',
        }); // Feedback positivo

        form.reset(); // Limpa os campos do formulário
      })
      .catch(function (error) {
        console.error('Erro ao enviar o email:', error);
        alertErro('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  });
});
