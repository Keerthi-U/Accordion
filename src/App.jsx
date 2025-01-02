import { useState } from 'react';
import Accordian from  './Accordian.jsx'

import './App.css'

function App() {


  const [questin , setquestion] = useState([

    {
      question:'Do I have to allow the use of cookies?',
      ans:'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
    },
    {
      question:'How do I change my My Page password??',
      ans:'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'
    },
    {
      question:'who is keerthi husband?',
      ans:'Mohammed Zakir Alangayam Varda'
    },
  ]);

  console.log(questin);
  
  return (
    <>
     <main>
      <Accordian  questin = {questin} />
     </main>
    </>
  )
}

export default App
