import { useRef } from "react"


function LisaUudis() {

    const uudiseRef = useRef()

    const LisaUusUudis = () => {
        let uudised = localStorage.getItem("uudised");
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem("uudised", uudised);

    }

    // const uudised = JSON.parse(localStorage.getItem("uudised")) ||[];
    // uudised.push(uudiseRef.current.value);
    // localStorage.setItem("uudised", JSON.stringify (uudised))
    
  return (
    <div>
        <label>Uudise nimi</label>
        <input ref={uudiseRef} type="text" />
        <button onClick={LisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis