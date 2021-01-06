const listarClientes = () => {
    return fetch('http://localhost:4000/clientes').then(
        resp => {
            return resp.json();
        }
    ).then(json => {
        return json;
    });
}

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });
    return fetch('http://localhost:4000/clientes/cliente',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json' 
        },
        body: json
    });
}

const deletaClientes = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
        method: 'DELETE'
    }).then(resp => {
        return resp.body
    });

    
}


const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
        method: 'GET'
    }).then(resp => {
        return resp.json();
    });
   
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    });
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json' 
        },
        body: json
    });
}

export {
    listarClientes,
    cadastrarClientes,
    detalhaCliente,
    editaCliente,
    deletaClientes
}