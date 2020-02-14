var tarefas
class Tarefa{
    constructor(nome,data){
        this.titulo = nome;
        this.data = data;
    }
}
var x = localStorage.getItem('Tarefas')
console.log(x)
if(x != null){
    tarefas = x
}else{ tarefas = []}

function cria_tarefa() {
    var x = document.getElementById('tarefa').value;
    var dados = x.split('em')
    tarefas.push(new Tarefa(dados[0],dados[1]))
    localStorage.setItem('Tarefas',tarefas)
    console.log(tarefas)
}
function visualizar() {
    var y = document.getElementById('lista')
    var text;
    for(i=0;i<length(x);i++)
        text = '<tr><th>algo</th>'
    }
    y.innerHTML = text
    console.log(y)
}