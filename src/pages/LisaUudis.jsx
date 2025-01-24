import { useRef, useState } from "react"


function LisaUudis() {
    const [sonum, setSonum] = useState("")

    const uudiseRef = useRef()

    const LisaUusUudis = () => {
        let uudised = localStorage.getItem("uudised");
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem("uudised", uudised);

    }
    // == täpselt sama, mis let'iga
    // const uudised = JSON.parse(localStorage.getItem("uudised")) ||[];
    // uudised.push(uudiseRef.current.value);
    // localStorage.setItem("uudised", JSON.stringify (uudised))

    const kontrolli = () => {
      setSonum("")

      if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()){ 
        setSonum ("Uudis peab algama suure algustähega")
        }
      if (uudiseRef.current.value.includes("  ")) {
        setSonum ("Kahte tühikut ei tohi olla")
      }
    }
    
  return (
    <div>
        {sonum} <br />
        <label>Uudise nimi</label>
        <input onChange={kontrolli} ref={uudiseRef} type="text" />
        <button onClick={LisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis