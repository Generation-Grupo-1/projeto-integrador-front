import { Link } from "react-router-dom"
import Home from "../../pages/home/Home"
import Sobre from "../../pages/sobre/SobreNos"
import Login from "../../pages/login/Login"
import Cadastro from "../../pages/cadastro/Cadastro"

function Navbar() {

    return (
        <>
            <div className='flex justify-center py-4 text-white bg-black max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            
                <div className="container flex justify-between text-lg">
                <Link to='./' onClick={Home} className='hover:text-cyan-300'>Apostilas Educa</Link>

                    <div className='flex gap-4'>
                        <Link to='./login' onClick={Login} className='hover:text-cyan-300'>Login</Link>
                        <Link to='./cadastro' onClick={Cadastro} className='hover:text-cyan-300'>Cadastro</Link>
                        <Link to='./sobre' onClick={Sobre} className='hover:text-cyan-300'>Sobre nós</Link>
                        <Link to='./' onClick={Home} className='hover:text-red-700'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar