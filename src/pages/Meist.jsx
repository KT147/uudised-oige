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
      <div className={n2iteTelJuhataja === true ? "valitud" : undefined}>Liisi Kass
      <div className={n2iteTelJuhataja === true ? "valitud" : undefined} onClick={() => muudaN2itaTelJuhataja(!n2iteTelJuhataja)}>Juhataja</div>
      {n2iteTelJuhataja && <div className="valitud">tel. 53535353</div>}
      <div className={n2iteTelJuhataja === true ? "valitud" : undefined}>liisi.kass@kingapood.ee</div>
      </div>
      <div className={n2iteTelTurundus === true ? "valitud" : undefined}>Anna Käpp
      <div className={n2iteTelTurundus === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTurundus(!n2iteTelTurundus)}>Turundusspetsialist</div>
      {n2iteTelTurundus && <div className="valitud">tel. 53434343</div>}
      <div className={n2iteTelTurundus === true ? "valitud" : undefined}>anna.kapp@kingapood.ee</div>
      </div>
      <div className={n2iteTelKlient === true ? "valitud" : undefined}>Artul Kartul
      <div className={n2iteTelKlient === true ? "valitud" : undefined} onClick={() => muudaN2itaTelKlient(!n2iteTelKlient)}>Klienditeenidaja</div>
      {n2iteTelKlient && <div className="valitud">tel. 53574743</div>}
      <div className={n2iteTelKlient === true ? "valitud" : undefined}>artul.kartul@kingapood.ee</div>
      </div>
    </div>

    </div>
  );
}

export default Meist;