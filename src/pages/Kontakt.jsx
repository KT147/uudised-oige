import { useState } from "react"
import tootajadFailist from "./data/tootajad.json"

function Kontakt() {
  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = tootajadFailist
  const [valitud, m22ravalitud] = useState("");

  const votaYhendust = (tootaja) => {
    n2itaKontakt (tootaja.Telefon);
    m22ravalitud(tootaja.Nimi)
  }


  return (
    <div>
        <div>Võta meiega ühendust</div>
        <br /> <br />
        {/* <div>Liisi Kass</div>
        <div>Juhataja</div>
        <button onClick={() => n2itakontakt ("52525252")}>Võta ühendust</button>
        <br /> <br />
        <div>Anna Käpp</div>
        <div>Turundusspetsialist</div>
        <button onClick={() => n2itakontakt ("52533583")}>Võta ühendust</button>
        <br /><br />
        <div>Artul Kartul</div>
        <div>Klienditeenindaja</div>
        <button onClick={() => n2itakontakt ("5464544")}>Võta ühendust</button>
        <br /><br /> */}
        VALITUD INIMENE: {valitud}
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
        <div>{tootajad.map(tootaja =>
        <div className={tootaja.Nimi === valitud ? "valitud" : undefined} key={tootaja.Nimi}>
           <div> {tootaja.Nimi}</div>
           <div> {tootaja.Ala}</div>
           <button onClick={() => votaYhendust(tootaja)}>Võta ühendus</button>
           </div>)}
      </div>
      </div>

  )
}

export default Kontakt