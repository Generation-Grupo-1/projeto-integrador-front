import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
    imagem: string;
    avaliacao?: number;
    comentario: string;
    categoria: Categoria|null;
}