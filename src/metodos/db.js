import axios from 'axios'

const listar = async () => {
    const itens = await axios({
        baseURL: 'http://localhost:6008',
        url: 'itens'
    }).then(res => res.data)
    return itens
}
const atualizar = async (itensSelecionados) => {
    await axios({
        baseURL: 'http://localhost:6008',
        method: 'put',
        url: 'itens',
        data: {itensSelecionados}
    }).then(res => res.data)
}

export {
    listar,
    atualizar
}