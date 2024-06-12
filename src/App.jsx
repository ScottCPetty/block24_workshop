import { useState } from "react"
import {puppyList} from "./data.js";
import "./App.css"

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p className="pNames" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        <p>{featPupId &&
          <div className="pupCard">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
          }
        </p>
      </div>
    </>
  );
}

export default App;
