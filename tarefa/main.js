//seleciona o form
const form = document.querySelector('.form');

//seleciona o campo de entrada da tarefa
const input = document.getElementById('input');

//seleciona a lista de tarefa
const lista = document.getElementById('lista');

//cria um array para armazenar as tarefas

let todas = []; //todas as tarefas

//função para mostrar as tarefas da lista

function listarTarefas() {
    lista.innerHTML = ''

    for (let i = 0; i < todas.length; i++) {
        const toda = todas[i]

        //cria um elemento de lista de texto e um botão para cada tarefa
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')

        //define o texto da tarefa no elemento span
        span.innerHTML = toda;

        //define o texto do botão de exclusão e adiciona ouvinte
        button.innerHTML = 'Excluir'
        button.addEventListener('click', function () {
            todas.splice(i, 1);
            listarTarefas();
        });

        //adiciona o elemento span e button ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        //adicionq o elemento li na lista de tarefas ul
        lista.appendChild(li)
    }
}

//adiciona um ouvinte de eventos ao formulario para detectar 

form.addEventListener('submit', function(event){
    event.preventDefault()

    //obtem o texto da tarefa e remove espaços extras
    const texto = input.value.trim();

    if (texto.length === 0){
        //se tentar criar a tarefa sem ter escrito nada ele não vai criar uma tarefa
        return;
    }
    todas.push(texto);
    input.value = ''
    listarTarefas();

})
listarTarefas;