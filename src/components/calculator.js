import React,  { useState } from "react"



// const Key= (props)=> {  
 
  
//       return (
//         <button 
//         className="key"
       
//         >
//           {props.val}
//         </button>
        
//       );
      
//     }
  



 const Board=() =>{ 

  const [input, setInput] = useState("");
  console.log(input)
  
  // const handleClick=()=>{

  // }
  
  
      return (
        <>
        
        <div  className="d-flex justify-content-center">
          <h1>Calculator</h1>
        </div>

        <div className="d-flex justify-content-center">
        <form>
        <input
          type="text"
          name="text"
          autoComplete="off"
         value={input}
         onChange={e => setInput(e.target.value)}
        />
        </form>
        </div>
        <div className="d-flex justify-content-center">
            <div className="board">

      <button 
        className="key"
        onClick={() => setInput(input+'(')}
        >
          (
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+')')}
        >
          )
        </button>

        <button 
        className="key"
        onClick={() => {
          if(input.length>0){
          
          setInput(input.slice(0, input.length-1))}



        }}

        >
          DEL
        </button>
        
        <button 
        className="key"
        onClick={() => setInput("")}
        >
          CE
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'7')}
        >
          7
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'8')}
        >
          8
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'9')}
        >
          9
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'/')}
        >
          /
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'4')}
        >
          4
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'5')}
        >
          5
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'6')}
        >
          6
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'*')}
        >
          x
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'1')}
        >
          1
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'2')}
        >
          2
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'3')}
        >
          3
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'-')}
        >
          -
        </button>

        <button 
        className="key"
        onClick={() => setInput(input+'0')}
        >
          0
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'.')}
        >
          .
        </button>

        <button 
        className="key equal"
        onClick={() => {
          
          try{
          setInput(eval(input).toString())
        }
        catch{
          setInput('ERROR')

        }
        
        
        
        }
      }
        >
          =
        </button>
        
        <button 
        className="key"
        onClick={() => setInput(input+'+')}
        >
          +
        </button>











{/* 
              <Key val='(' />
              <Key val=')' />
              <Key val='%'/>
              <Key val='CE'/>
              <Key val='7'/>
              <Key val='8'/>
              <Key val='9'/>
              <Key val='/'/>
              <Key val='4'/>
              <Key val='5'/>
              <Key val='6'/>
              <Key val='x'/>
              <Key val='1'/>
              <Key val='2'/>
              <Key val='3'/>
              <Key val='-'/>
              <Key val='0'/>
              <Key val='.'/>
              <Key val='='/>
              <Key val='+'/>  */}

           
            
            
              
              
            </div>
          </div></>
      );
    }
  

 




export default function Calculator() {
 


 

    return (
      <Board />
      
    );
  }


  // <button 
  //       className="key"
  //       onClick={() => setInput(input+'1')}
  //       >
  //         1
  //       </button>
  //       <button 
  //       className="key"
  //       onClick={() => setInput(input+'2')}
  //       >
  //         2
  //       </button>
  //       <button 
  //       className="key"
  //       onClick={() => setInput(input+'+')}
  //       >
  //         +
  //       </button>
  //       <button 
  //       className="key"
  //       onClick={() => setInput(Function(input))}
  //       >
  //         =
  //       </button>