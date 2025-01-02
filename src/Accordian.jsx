import React, { useState } from 'react';
import { CiCirclePlus ,CiCircleMinus  } from "react-icons/ci";


const Accordian = ( {questin}) => {

    const [ans , setAns] = useState(null);

    console.log("questin" , questin);

     const plus = (index) => {
        alert(index);
        // const filteredDatta = questin.find((quest, i) => i === index ? quest.ans : 0 );
        // setAns(filteredDatta ? filteredDatta.ans   : null)

        setAns(ans === index ?  null : index)
        
    }
    
 console.log("ans" , ans);
 
  return (
     <div>
      <div className="accordian">
    {questin.map((data , index) => (
  <ul key={index}>
    <div className="list">
    <li>{data.question}<button onClick={()=> plus(index)}>{ans === index ? <CiCircleMinus /> : <CiCirclePlus /> }</button> </li> 
    <p className={ans === index  ? 'visble' : 'notvisble'}> {ans=== index ?  data.ans : ''}</p>
    </div>
     
   
</ul>
    ))}
    </div>
    
    </div>
  )
}

export default Accordian