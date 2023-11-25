/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {

  const { usuario } = useContext(AuthContext)

  return (
    <>
      <div className="bg-gray-300 justify-center items-center tabela-layout:auto">
        <div className="container mx-auto w-full p-4 text-white">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
            <a href="#">
              <img
                className="p-5 rounded-t-lg im"
                src={produto.imagem}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {produto.nome}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"

                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"

                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="bg-blue-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {produto?.avaliacao}
                </span>
              </div>
              <div className="">
                <span className="text-1xl font-bold text-cyan-900 dark:text-gray-500">
                  Qtd:{produto.quantidade}
                </span>
              </div>
              <div className="flex items-center justify-between ">
                <span className="text-3xl font-bold text-gray-900 dark:text-cyan-500">
                  R${produto.preco}
                </span>

                <a
                  href="#"
                  className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-2 text-center dark:bg-sky-950 dark:hover:bg-cyan-600 dark:focus:ring-cyan-200"
                >
                  Comprar
                </a>

              </div>

              {usuario.tipo === "ADMIN" &&
                (
                <div className="flex mt-6 space-x-4">
                  <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-cyan-800 
                      hover:bg-cyan-200 hover:text-black flex items-center justify-center py-2'>
                    <button>Editar</button>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 
                      hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                  </Link>
                </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduto;
