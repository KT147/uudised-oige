import { useRef } from "react";
import { useParams } from "react-router-dom"


function MuudaUudis() {
    const {index} = useParams();
    const uudised = JSON.parse(localStorage.getItem("uudised"))|| [];
    const leitud = uudised [index];
    const uudisRef = useRef();

    const muuda = () => {
        uudised[index]= uudisRef.current.value
        localStorage.setItem("uudised", JSON.stringify(uudised))
    }

  return (
    <div>
        <label></label><br />
        <input ref={uudisRef} defaultValue={leitud} type="text" /><br />
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaUudis