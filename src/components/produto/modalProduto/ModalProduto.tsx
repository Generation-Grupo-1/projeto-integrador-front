import Popup from 'reactjs-popup';
import FormularioProduto from '../formularioProduto/FormularioProduto';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function ModalProduto() {

    const { usuario } = useContext(AuthContext)

    return (
        <>
            {usuario.tipo === "ADMIN" &&
                (
                    <Popup
                        trigger={
                            <button
                                className='border rounded px-4 py-2 hover:bg-cyan-300 hover:text-indigo-800'>
                                Novo Produto
                            </button>
                        }
                        modal
                    >
                        <FormularioProduto />
                    </Popup>
                )
            }
        </>
    );
}

export default ModalProduto;