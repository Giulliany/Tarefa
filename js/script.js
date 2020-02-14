class Tarefa{
    constructor(titulo, data){
        this.titulo = titulo;
        this.data = data
    }
}
// Programa
var conteudo, tbtarefa, cont

function salvar() {
    cont = localStorage.getItem('cont')
    if(cont == null){cont = 0}else{cont =parseInt(cont)};//Se cont igual a null ainda não existe um contador, se não transforma para inteiro o valor de cont
    conteudo = document.getElementById('entrada').value.split('em');//Separando as informações
    //console.log(conteudo);
    tbtarefa =JSON.stringify(new Tarefa(conteudo[0],conteudo[1]))//Transforma o Objeto em uma sequencia
                                                                // de caracteres(String)
    localStorage.setItem(cont, tbtarefa);//Salvando a tarefa no localStorage
    localStorage.setItem('cont',cont+1);//Incrementando o contador no localStorage
}

function listar() {
    cont = parseInt(localStorage.getItem('cont')) + 1;
    for(i=0; i < cont;i++){
        tbtarefa =JSON.parse(localStorage.getItem(i))//Transforma a sequencia de caracters(String) armazenada
                                                    //no localstorage em um objeto
        console.log(tbtarefa,'cont:',i)
        if(tbtarefa!=null){
            document.getElementById('lista').innerHTML +='<tr>\
                                                            <th>'+tbtarefa.data+'</th>\
                                                            <th>'+tbtarefa.titulo+'</th>\
                                                            <th>\
                                                                <button class="btn" onclick="apagar('+i+')"><img src="assets/bin.png"/></button>\
                                                                <button class="btn" onclick="editar('+i+')"><img src="assets/pen.png"/></button>\
                                                            </th>\
                                                        </tr>'//listando as tarefas
        }
    }
}

function apagar(key) {
    localStorage.removeItem(key)
    location.reload();
}

function editar(key) {
    tbtarefa =JSON.parse(localStorage.getItem(key));
    var edit = prompt('Editar Tarefa:',tbtarefa.titulo +'em'+ tbtarefa.data).split('em')
    localStorage.setItem(key,JSON.stringify(new Tarefa(edit[0],edit[1])))
    location.reload()
}