//seleciona o formulário do login
const form = document.querySelector('.login-form')
//seleciona o campo de entrada do usuário
const usuarioInput = form.querySelector("input[type='text']");
//dessa forma pegamos identificamos a tag pelo tipo do input dela, usamos o form ao invés do document para indicar onde o código deve procurar
// esse input
const senhaInput = form.querySelector("input[type='password']");
//seleciona o campo de entrada da senha
//adiciona um ouvinte de eventos ao formulário para detectar quando o usuário clicar no botão
form.addEventListener('submit', (event) =>{
    //adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
 event.preventDefault();
 //obtém os valores dos campos entrada do usuário e senha e o trim() remove os espaços em branco tanto no começo quanto no final de cada campo
 const usuario = usuarioInput.value.trim();
 const senha = senhaInput.value.trim();
 if(usuario === '' || senha === ''){
    alert("por favor, preencha os campos");
 } else if (usuario === 'usuario' && senha === 'senha'){
    //verifica se as informações de login e senha estão corretas
    alert("Bem vindo!")
    location.replace("/tarefa/index.html","_self")
} else{
    //exibe uma mensagem de erro se as informações estiverem erradas
    alert("Usuário ou senha incorreta, tente novamente")
}

})