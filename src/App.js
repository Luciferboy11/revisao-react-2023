import React, { useState } from "react";
function App() {


  //let credito = 0;

  const [ credito, setcredito] = useState(155)

function AdicionarCredito(){
  setcredito(credito + 1);
}
function compraPassagem( preco ){

  if(credito < preco){
      alert("Crédito insuficiente....")
      return
  }
  
      setcredito(credito - preco);
      //document.getElementById("txtCreditos").innerHTML = Creditos
      alert("Passagem comprada com sucesso!")
}




  return (
  <div>
   <h1> Pachequito passagens</h1>
  <p> Conheço os mundos pelo melhor preço</p>

  <button onClick={ ()=>AdicionarCredito()}> Adicionar Crédito</button>


  <p>Seu credito é de <strong>{credito}</strong></p>

<h2> Viagens </h2>
  <p>Los angeles - R$ 1200 <button onClick={()=>compraPassagem(1200)}>Comprar</button> </p>
  <p>Londres - R$ 1420 <button onClick={()=>compraPassagem(1420)}>Comprar</button> </p>
  <p>França  - R$ 1700 <button onClick={()=>compraPassagem(1700)}>Comprar</button> </p>

  </div>
  );
}

export default App;
