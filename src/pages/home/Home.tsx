import Card from "../../components/card/Card";

function Home() {
  //chamando a context com o valor recebido

  return (
    <>
      <div className="flex grid-flow-col">
        <Card/>
        <Card/>
        <Card/> 
      </div>
    </>
  );
}

export default Home;
