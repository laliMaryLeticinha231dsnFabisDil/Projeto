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

        li.style.marginBottom = '30px';


        // editando o botão excluir :)

        button.style.backgroundColor = 'pink'
        button.style.backgroundColor = 'rgba (#b56680)'
        button.style.padding = '10px, 30px';
        button.style.color = 'white';
        button.style.textTransform = 'uppercase';
        button.style.letterSpacing = '2px';
        button.style.borderRadius = '10px';
        button.style.border = '2px dashed #cc6892';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)'
        button.style.transition = '.4s';
        button.style.display = 'inline-block';
        button.style.backgroundColor = '#b56680';
        button.style.color = '#fff';
        button.style.paddingTop = '5px'; 
        button.style.paddingBottom = '5px'; 
        button.style.paddingLeft = '20px'; 
        button.style.paddingRight = '20px'; 
        button.style.marginLeft = '20px';



        // button.style.position = 'fixed';      esses são para deixar somente um botão em um lugar
        // button.style.top = '20px';
        // button.style.left = '20px';


        // Adicionar evento de hover
        button.addEventListener('mouseenter', () => {
            button.style.transition = '0.4s';
            button.style.border = '2px dashed #b56680';
            button.style.backgroundColor = '#fff';
            button.style.color = '#b56680';
        });

        // Adicionar evento de clique (active)
        button.addEventListener('mousedown', () => {
            button.style.backgroundColor = '#87dbd0';
        });

        // Adicionar evento de saída do hover
        button.addEventListener('mouseleave', () => {
            button.style.border = 'none';
            button.style.backgroundColor = '#b56680';
            button.style.color = '#fff';
        });




        //adiciona o elemento span e button ao elemento lista
        li.appendChild(span);
        li.appendChild(button);

        //adicionq o elemento li na lista de tarefas ul
        lista.appendChild(li)
    }
}

//adiciona um ouvinte de eventos ao formulario para detectar 

form.addEventListener('submit', function (event) {
    event.preventDefault()

    //obtem o texto da tarefa e remove espaços extras
    const texto = input.value.trim();

    if (texto.length === 0) {
        //se tentar criar a tarefa sem ter escrito nada ele não vai criar uma tarefa
        return;
    }
    todas.push(texto);
    input.value = ''
    listarTarefas();

})
listarTarefas;