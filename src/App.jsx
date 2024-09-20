import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {

    const [data, setData] = useState();

    useEffect( ()=> {
        axios.get('http://localhost:8080/todos')
        .then((response)=> {
            setData(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, [])
    console.log(data);
    return (
      <>
        <p>{JSON.stringify(data)}</p>
      </>
    );
  }
  