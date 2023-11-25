import { MagnifyingGlass } from "@phosphor-icons/react";

function Header() {
  return (
    <>
      <div
        className="Header w-full
            justify-center py-3 bg-cyan-500 text-white w-400 text-sm max-w-6x1 mx-auto px-4 sm:px-5 lg:px-7"
      >
        <div className="flex justify-center">
          <form className="px-4 rounded-md bg-white flex items-center">

          <button
              className="text-black bg-transparent border-none cursor-pointer flex items-center justify-center"
              type="submit"
              aria-label="Iniciar pesquisa"
            >
              <MagnifyingGlass size={16} />
            </button>
            <input
              className="bg-white border-none rounded-md p-2 w-48 text-black outline-none"
              type="text"
              placeholder="Digite sua pesquisa"
              aria-label="Campo de pesquisa"
            />
           
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
