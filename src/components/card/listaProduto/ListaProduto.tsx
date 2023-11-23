/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import { toastAlerta } from '../../../utils/toastAlerta';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProduto/CardProduto';
import ModalProduto from '../../produto/modalProduto/ModalProduto';

function ListaProduto() {

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente',"erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado',"erro")
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
      <>
      {produtos.length === 0 && (
          <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
          />
    )}
        <div className="flex justify-center py-7 text-black bg-transparent max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 ">
            <h1 className="text-3xl font-bold">Apostilas Educa</h1>
                <div className="flex justify-around gap-4">
                      <div className="flex justify-around gap-4">
                          <ModalProduto />
                      </div>                    
                 </div>
              <hr />
          </div>
            <div className='flex flex-wrap'>    
                {produtos.map((produto) => (
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
                        <CardProduto key={produto.id} produto={produto} />
                    </div>
                 ))}
            </div>
        </>
    )
}

export default ListaProduto