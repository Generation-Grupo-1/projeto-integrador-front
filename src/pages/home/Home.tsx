import Carrousel from "../../components/carrousel/Carrousel";


function Home() {
  return (
    <> 
      <div className="Home">
        <div className="w-3/4 content-center mx-auto pt-5">
        <Carrousel />
        </div>   
        <div className="conteudo-main">
          <div className="font-bold text-center bg-gray-300 mx-20 text-cyan-600 px-20 space-x-6 mt-8 p-6">
            <p className="font-serif text-3xl grid grid-flow-row">
              Desbravamos fronteiras educacionais, proporcionando acesso
              acessível a apostilas de português e matemática. Nossa missão é
              construir um futuro mais brilhante e igualitário por meio da
              educação transformadora. Venha conhecer nossas apostilas!
            </p>
          </div>
          <div className="flex justify-center mt-5 pb-5">
            <img
              src={
                "https://cdn.discordapp.com/attachments/1139577278892875776/1177325668116213811/mt1.png?ex=657218f8&is=655fa3f8&hm=52e1779434f9942704ffd383c0585af8eaabc669403f947ca603c401faee0fbd&"
              }
              alt="Imagem 1"
              className="mr-40 w-1/4"
            />

            <img
              src={
                "https://cdn.discordapp.com/attachments/1139577278892875776/1177325668418195546/pt1.png?ex=657218f9&is=655fa3f9&hm=f34178409e03829cb8306f67bf07f3f99c07da88e47383418b485f59ef4f01fd&"
              }
              alt="Imagem 2"
              className=" w-1/4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
