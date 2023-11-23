import "./SobreNos.css";

function Sobre() {

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4 h-full mt-8">
          <h1 className="text-center text-4xl text-black font-serif">Somos <strong className="text-cyan-600">Apostila Educa</strong></h1>
          <img src="https://media.discordapp.net/attachments/1139577278892875776/1177345219134505041/somos-nos.png?
              65722b2e&is=655fb62e&hm=500a8c6e939bac3b88a7e43637ccb55403e9303b7c80718b5e5342ab05d016b6&=&
              format=webp&width=766&height=662" 
          alt="todes" className="mt-4 w-1/2" />
          <p className="text-center text-2xl text-black font-serif">
            Somos impulsionados pela paixão de democratizar a educação, tornando-a acessível a todos.
            Nossa missão vai além da venda de apostilas; somos uma ponte para a transformação de vidas por meio do aprendizado contínuo.
            Descubra como estamos construindo um futuro mais educado e igualitário em nosso e-commerce dedicado às disciplinas fundamentais de português e matemática.
          </p>
        </form>
        <div className="fundoSobreNos hidden lg:block"></div>
      </div>
    </>
  );
}

export default Sobre;
