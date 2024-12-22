import { useState } from "react"

function Kontakt() {
  const [kontakt, n2itakontakt] = useState("");
  return (
    <div>
      <div>
        <div>Võta meiega ühendust</div>
        <br /> <br />
        <div>Liisi Kass</div>
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
        <br /><br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
      </div>
    </div>

  )
}

export default Kontakt