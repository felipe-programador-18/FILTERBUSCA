import React, {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css';

const Url = 'https://randomuser.me/api/'
const funcionario = ['Felipe', 'Gustavo', 'Henrique','Fatima','Cristina']

function App() {
  const [data, setdata] = useState(Url)
  const [busca, setbusca] = useState('')
  
  const filtrado = busca.toLowerCase()
  const empregadofil = funcionario
  .filter((funciona) => funciona.toLowerCase().includes(filtrado))
 
  const dataname = data.toLowerCase()
  const Nome = Url.filter((name) => name.toLowerCase.includes(dataname))

 useEffect(() =>{
   axios.get(Url)
   .then(res => 
    setdata(res.data))
 }, [])

  return (
    <div className="App">
     <h1>Pesquisa Empresa</h1>
     <input type='text' value={busca} onChange={(ev) => setbusca(ev.target.value)}   placeholder='Searching' ></input>
     
       <ul> {empregadofil.map((funciona) => (
        <li key={funciona}>{funciona}</li>
     ) )}
       </ul>  

       <input type='text' value={data} onChange={(ev) => setdata(ev.target.value)} >
       </input>

       <ul> {Nome.map((name) => (
         <li key={name}>{name}</li>
       ) )}

       </ul>
          
          {JSON.stringify(data)}
    </div>
  );
}

export default App;
