import { detalhaCliente, editaCliente } from '../../api/cliente.js';
import  validaCPF  from '../valida/validaCPF.js'

const eventoForm = form => {

    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id');

    const inputCPF = form.querySelector('[data-cpf]');
    const inputNome = form.querySelector('[data-nome]');

    detalhaCliente(id).then(dados => {
        inputCPF.value = dados[0].cpf;
        inputNome.value = dados[0].nome;
    });

    /*
    const msgSucesso = (mensagem) => {
        const linha = document.createElement('tr');
        const conteudoLinha = `
        <div class="alert alert-success" role="alert">
          <label>${mensagem}</label>
        </div>
        `;
        linha.innerHTML = conteudoLinha;
        return linha;
    }
    
    const msgErro = (mensagem) => {
        const linha = document.createElement('tr');
        const conteudoLinha = `
        <div class="alert alert-warning" role="alert">
          <label>${mensagem}</label>
        </div>
        `;
        linha.innerHTML = conteudoLinha;
        return linha;
    }
    
    */

    const alerta = (classe, mensagem) => {
        const linha = document.createElement('section');
        const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>`;
        linha.innerHTML = conteudoLinha;
        return linha;
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (inputCPF.value.length !== 11) {
            alert("ESSE CPF NÃO EXISTE");
            return;
        }
        
        if (!validaCPF(inputCPF.value)) {
            alert("ESSE CPF NÃO EXISTE");
            return;
        }
       

        editaCliente(id, inputCPF.value, inputNome.value)
            .then(() =>
                    form.appendChild(alerta(
                        "alert alert-success",
                        "CLIENTE EDITADO COM SUCESSO !"
                    ))
            )
             .catch(() =>
                    form.appendChild(alerta(
                        "alert alert-warning",
                        "O CLIENTE NÃO PODE SER EDITADO !"
                    )) 
            )
    })
}

export default eventoForm;