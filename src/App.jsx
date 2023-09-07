import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../todo'
import Actor from '../Actor'
import Singers from '../singers'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
   const actors =['shakib','shoriful','riyaz','manna']
   const singers=[
    {id:1 ,name:'imran',age:30},
    {id:2, name:'tanjina',age:20},
    {id:3 ,name:'Rabbani khan',age:40},
    {id:4, name:'abu khan',age:30}

   ]

const books=[
  {id:1,Name:'bangla',Price:1000},
  {id:2,Name:'english',Price:1000},
  {id:3,Name:'math',Price:1000},
  {id:4,Name:'geography',Price:1000},
  {id:5,Name:'history',Price:1000}
]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singers singer ={singer}></Singers>)
      }
      <Actor name={"bappa raj"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="learn React" isDone ={true}></Todo>
      <Todo task="learn jsx" isDone={false}></Todo>
      <Todo task="learn js" isDone={true}></Todo> */}
      {/* <Device name='laptop' price='1200'></Device>
      <Device name='computer' price='30000'></Device>
      <Device name='i phone' price='40000000'></Device>
    <Person></Person>
    <Student grade ='7' score ='99'></Student>
    <Student grade ='8' score ='90'></Student>
    <Student ></Student>
    <Developer></Developer> */}
    </>
  )
}

function Person(){
  const  age =18;
  const money =20;
  const person ={name:'foysal', age : 17}
  return <h3>I am {person.name} my age {age+money} </h3>
}
function Student ({grade=1,score=0}){
 
  return (
    <div className='student'>
      <h1>this is my first component declare</h1>
      <p>name:{grade}</p>
      <p>age:{score}</p>
    </div>
  )
}

function Developer (){
  const developerStyle ={
    margin :'20px',
    padding:'20px',
    border:'2px solid red',
    borderRadius:'20px'
  }
  return(
    <div style={{
      margin :'20px',
      padding:'20px',
      border:'2px solid red',
      borderRadius:'20px'
    }}>
      <h5>Devo devo</h5>
      <p>Coding</p>
    </div>
  )
}

function Device(props){
  
  return <h2>This device name is {props.name} and  price {props.price}</h2>
}

export default App
