import { Link } from "react-router-dom";

function Uudised() {

  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
  
    <div>
        {uudised.map((uudis,index)=>
        <Link to={"/uudis/" + index} key={uudis}>
         <div>{uudis}</div>
         </Link>
        )}
      {uudised.length === 0 && <div>Uudiseid pole</div>}
    </div>
  )
}

export default Uudised