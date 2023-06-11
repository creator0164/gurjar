import {useState, useEffect} from "react";
import axios from "axios";
import { domain } from "../data/constant";
const GurjarInfo = ({data}) => {
  const [value, setValue] = useState({valid: true, gurjar_population: 0, gurjar_india_population:0});
  const population = ()=>{
    axios
      .get(domain+"/gurjar/gurjar_population/")
      .then((response) => {
        setValue(response.data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    population()
  }, []);
  return (
    <div className="mb-10">
      <p>Gurjar Population of the World: {value.gurjar_population} </p>
      <p>Gurjar Population of India:  {value.gurjar_india_population}</p>
      <p>Gurjar ID: {data.user.gurjar_id} </p>
      <p>Gurjar Points:  999</p>
    </div>
  );
};

export default GurjarInfo;
