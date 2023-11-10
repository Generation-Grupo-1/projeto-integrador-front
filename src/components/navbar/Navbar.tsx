import { Link } from "react-router-dom"
import Home from "../../pages/home/Home"
import Sobre from "../../pages/sobre/SobreNos"
import Login from "../../pages/login/Login"
import Cadastro from "../../pages/cadastro/Cadastro"
import Apostilas from "../../pages/apostilas/Apostilas"

import logo from "../../../src/assets/img/logo.png"


function Navbar() {

    return (
        <>
            <div className='flex justify-center py-4 text-white bg-black max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            
                <div className="container flex justify-between text-lg ">
                <Link to="./" onClick={Home} className= "container mx-11 w-12 ">
                    <img src={logo} alt="Apostilas Educa" />
                </Link>
                    <div className='flex gap-4 pt-2'>
                        <Link to='./' onClick={Home} className='text-cyan-300'>Home</Link>
                        <Link to='./login' onClick={Login} className='hover:text-cyan-300'>Login</Link>
                        <Link to='./cadastro' onClick={Cadastro} className='hover:text-cyan-300'>Cadastro</Link>
                        <Link to='./apostilas' onClick={Apostilas} className='hover:text-cyan-300'>Apostilas</Link>
                        <Link to='./sobre' onClick={Sobre} className='hover:text-cyan-300'>Sobre nós</Link>
                        <Link to='./' onClick={Home} className='hover:text-red-700'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar