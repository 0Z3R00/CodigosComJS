const removeCliente = id => {
    if(confirm("Deseja deletar o cliente ?")){
        deletaClientes(id);
        document.location.reload();
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <button type="button" class="btn btn-danger" onclick="removeCliente(${id})" >Excluir</button>
        <a type="button" class="btn btn-info"  href="edita-clientes.html?id=${id}" >Editar</a>`;
    linha.innerHTML = conteudoLinha;
    return linha;
}

listarClientes().then( exibe => {
    exibe.forEach(element => {
        corpoTabela.appendChild(exibeCliente(element.cpf, element.nome, element.id));
    });
})