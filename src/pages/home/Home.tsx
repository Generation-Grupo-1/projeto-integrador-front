import Card from "../../components/card/Card";

function Home() {
  //chamando a context com o valor recebido

  return (
    <>
      <div className='container mx-auto p-6 grid grid-cols-4 gap-4'>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>
        <div><Card/></div>  
      </div>
    </>
  );
}

export default Home;
