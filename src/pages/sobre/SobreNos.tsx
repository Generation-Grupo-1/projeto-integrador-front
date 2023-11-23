import "./SobreNos.css";

function Sobre() {

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4 h-full mt-8">
          <h1 className="text-center text-4xl text-black">Somos Apostila Educa</h1>
          <p className="text-center text-lg text-black">Nosso principal objetivo é ajudar pessoas</p>
          <p className="text-center text-lg text-black">a conseguirem sua educação básica tanto em portugês quanto em matemática!</p>
          <img src="https://www.conexaolusofona.org/wp-content/uploads/2015/03/direitos-humanos-ilustra-960.jpg" alt="todes" className="mt-4" />
        </form>
        <div className="fundoSobreNos hidden lg:block"></div>
      </div>
    </>
  );
}

export default Sobre;
