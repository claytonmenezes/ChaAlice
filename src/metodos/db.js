import axios from 'axios'

const listar = async () => {
    const itens = await axios({
        baseURL: 'https://chaaliceback.onrender.com',
        url: 'itens'
    }).then(res => res.data)
    return itens
}
const atualizar = async (itensSelecionados) => {
    await axios({
        baseURL: 'https://chaaliceback.onrender.com',
        method: 'put',
        url: 'itens',
        data: {itensSelecionados}
    }).then(res => res.data)
}

export {
    listar,
    atualizar
}