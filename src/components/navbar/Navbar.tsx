import { Link } from "react-router-dom"
import Home from "../../pages/home/Home"
import Sobre from "../../pages/sobre/SobreNos"
import Login from "../../pages/login/Login"
import Cadastro from "../../pages/cadastro/Cadastro"

import logo from "../../../src/assets/img/logo.png"



function Navbar() {

    return (
        <>
            <div className='flex justify-center py-1 text-white bg-black max-w-7x1 mx-auto sm:px-6 lg:px-8'>
            
                <div className="container flex justify-between text-lg ">
                <Link to="./" onClick={Home} className= "mx-11 w-11 ">
                    <img src={logo} alt="Apostilas Educa" />
                </Link>
                    <div className='flex gap-5 pt-2 max-w-5x1 px-2 sm:px-4 lg:px-6'>
                        <Link to='./' onClick={Home} className='text-cyan-300 '><i className="ri-home-4-fill"></i></Link>
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='./login' onClick={Login} className='hover:text-cyan-300'>Login</Link>
                        <Link to='./cadastro' onClick={Cadastro} className='hover:text-cyan-300'>Cadastro</Link>
                        <Link to='./apostilas' className='hover:text-cyan-300'>Apostilas</Link>
                        <Link to='./sobre' onClick={Sobre} className='hover:text-cyan-300'>Sobre nós</Link>
                        <Link to='./' onClick={Home} className='hover:text-red-700'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar