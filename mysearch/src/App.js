import React, {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css';

const Url = 'https://randomuser.me/api/'
const funcionario = ['Felipe', 'Gustavo', 'Henrique','Fatima','Cristina']
const Emplooyee = ['Programmer', 'developer','thought about my life']


function App() {
  const [data, setdata] = useState(Url)
  const [busca, setbusca] = useState('')
  const[find, setfinds] = useState('')

  const filtrado = busca.toLowerCase()
  const empregadofil = funcionario
  .filter((funciona) => funciona.toLowerCase().includes(filtrado))

  //theoritical i create filter to adding data and filter too!!
  const Union = find.toLowerCase()
  const fiddingProff = Emplooyee.filter((fi) => fi.toLocaleLowerCase().includes(Union))


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

       <input type='text' value={find} onChange={(ev)=> setfinds(ev.target.value)} >
       </input>

       <ul> {fiddingProff.map((fi)=> (
          <li key={fi}> {fi} </li>
       ))}
        
       </ul>
      
          
          {JSON.stringify(data)}
    </div>
  );
}

export default App;
