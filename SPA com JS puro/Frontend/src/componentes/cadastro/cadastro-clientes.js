import {cadastrarClientes} from '../../api/cliente.js'
import validaCPF from '../valida/validaCPF';

const alerta = (classe, mensagem) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>`;
    linha.innerHTML = conteudoLinha;
    return linha;
}

const eventoEnvia = (form) => {
   // const formCadastroCliente = document.querySelector('[data-form]');
    
    form.addEventListener("submit", event=>{
        event.preventDefault();
        
        const nome = event.target.querySelector('[data-nome]').value;
        const cpf = event.target.querySelector('[data-cpf]').value;
    
        if(validaCPF(cpf)){
            cadastrarClientes(nome, cpf).then(resposta => {
                if( resposta.status === 200 ){
                    form.appendChild(alerta(
                        "alert alert-success",
                        "CLIENTE CRIADO COM SUCESSO !"
                    ))
                } else { 
                    form.appendChild(alerta(
                        "alert alert-warning",
                        "O CLIENTE NÃO PODE SER CRIADO !"
                    ))
                }
            })
        }else{
            alert("CPF digitado não é valido");
        }
    })
}

export default eventoEnvia;