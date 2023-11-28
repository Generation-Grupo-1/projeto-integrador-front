import { Link } from "react-router-dom";

import logo from "../../../src/assets/img/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {

  const { usuario, handleLogout } = useContext(AuthContext)

  const handleLogoutClick = () => {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso!","sucesso");
  };

  return (
    <div className='flex justify-center py-2 text-white bg-black max-w-4x1 mx-auto sm:px-3 md:px-6 lg:px-7'>
      <div className="container flex sm:px-4 md:px-5 lg:px-6 justify-between text-lg ">
        <Link to="/" className="flex sm:w-5 md:w-8 lg:w-11">
          <img src={logo} alt="Apostilas Educa" />
        </Link>
        <div className='flex gap-4 pt-2 max-w-7x1'>
          <Link to='/' className='text-cyan-300'><i className="ri-home-4-fill"></i></Link>

          {usuario.tipo === "ADMIN" &&
            (
              <>
                <Link to='/categoria' className='hover:text-cyan-300 '>Categoria</Link>
                <Link to='/cadastroCategoria' className='hover:text-cyan-300'>Cadastrar Categoria</Link>
              </>
            )
          }

          <Link to='./cadastro' className='hover:text-cyan-300'>Cadastre-se</Link>
          <Link to='./apostilas' className='hover:text-cyan-300'>Apostilas</Link>
          <Link to='./sobre' className='hover:text-cyan-300'>Sobre nós</Link>

          {usuario.token === ""
            ?
            (<Link to='./login' className='hover:text-cyan-300'>Login</Link>)
            :
            (<Link to='./' onClick={handleLogoutClick} className='hover:text-red-700'>Sair</Link>)
          }

        </div>
      </div>
    </div>
  );
}

export default Navbar;
