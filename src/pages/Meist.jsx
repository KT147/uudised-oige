import { useState } from "react";

function Meist() {
  const [n2iteTelJuhataja, muudaN2itaTelJuhataja] = useState(false);
  const [n2iteTelTurundus, muudaN2itaTelTurundus] = useState(false);
  const [n2iteTelKlient, muudaN2itaTelKlient] = useState(false);


  return ( <div>
    <br></br>
    <div className="tootajad">Meie töötajad</div>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '80px'}}>
      <div>Liisi Kass
      <div onClick={() => muudaN2itaTelJuhataja(!n2iteTelJuhataja)}>Juhataja</div>
      {n2iteTelJuhataja && <div>tel. 53535353</div>}
      <div>liisi.kass@kingapood.ee</div>
      </div>
      <div>Anna Käpp
      <div onClick={() => muudaN2itaTelTurundus(!n2iteTelTurundus)}>Turundusspetsialist</div>
      {n2iteTelTurundus && <div>tel. 53434343</div>}
      <div>anna.kapp@kingapood.ee</div>
      </div>
      <div>Artul Kartul
      <div onClick={() => muudaN2itaTelKlient(!n2iteTelKlient)}>Klienditeenidaja</div>
      {n2iteTelKlient && <div>tel. 53574743</div>}
      <div>artul.kartul@kingapood.ee</div>
      </div>
    </div>

    </div>
  );
}

export default Meist;