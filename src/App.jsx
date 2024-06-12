import { useState } from "react"
import {puppyList} from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        <p>{featPupId && <p>{featPupId}</p>}</p>
      </div>
    </>
  );
}

export default App;
