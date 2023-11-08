import { Link } from "react-router-dom"
import Home from "../../pages/home/Home"
import Sobre from "../../pages/sobre/SobreNos"
import Login from "../../pages/login/Login"
import Cadastro from "../../pages/cadastro/Cadastro"
import "./NavBar.css";

function Navbar() {

    return (
        <>
            <div className='Navbar w-full
                flex justify-center py-4 bg-black'>
            
                <div className="container flex justify-between text-lg">
                <Link to='./' onClick={Home} className='hover:underline'>Apostilas Educa</Link>
                   

                    <div className='flex gap-4'>
                        <Link to='./login' onClick={Login} className='hover:underline'>Login</Link>
                        <Link to='./cadastro' onClick={Cadastro} className='hover:underline'>Cadastro</Link>
                        <Link to='./sobre' onClick={Sobre} className='hover:underline'>Sobre nós</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar