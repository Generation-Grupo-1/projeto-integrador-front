/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../../components/card/Card";

import ApostilaMat1 from "../../assets/img/apostilas-img/apostila_matematica_basica.png";
import ApostilaMat2 from "../../assets/img/apostilas-img/apostila_matematica_intermediaria.png";
import ApostilaMat3 from "../../assets/img/apostilas-img/apostila_matematica_avancada.png";
import ApostilaPort1 from "../../assets/img/apostilas-img/apostila_portugues_basico.png";
import ApostilaPort2 from "../../assets/img/apostilas-img/apostila_portugues_intermediario.png";
import ApostilaPort3 from "../../assets/img/apostilas-img/apostila_portugues_avancado.png";


  //chamando a context com o valor recebido
const Apostilas: React.FC = () => {
  return (
    <>
     <div className="flex justify-center py-7 text-black bg-transparent max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold">Apostilas Educa</h1>
          <hr />
      </div>
      
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaMat1} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaMat2} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaMat3} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaPort1} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaPort2} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Card imageSrc={ApostilaPort3} />
        </div>      
      </div>
      <div/>
    </>
    
  );
}


export default Apostilas;
