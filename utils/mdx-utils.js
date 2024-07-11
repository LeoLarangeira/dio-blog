import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 
    console.log("--------------DATA-------------", data)
    if(data){
        return data;
    }

    return []
}


export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts?id=eq.${id}`);
        if (data && data.length > 0) {
            console.log("--------------DATA-------------", data)
            return data[0]; // Retorna o primeiro post encontrado com o ID especificado
        }
        return {}; // Retorna um objeto vazio se nenhum post for encontrado
    } catch (error) {
        console.error('Erro ao buscar o post:', error);
        throw error; // Lança o erro para que ele possa ser tratado em outro lugar, se necessário
    }
};
