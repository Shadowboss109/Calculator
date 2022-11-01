import React,  { useState } from "react"

const Key= (props)=> {   
      return (
        <button 
        className="key"
        >
          {props.val}

        </button>
      );
    }
  
  

 const Board=() =>{ 
 


 

   

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
         
        />
        </form>
        </div>
        <div className="d-flex justify-content-center">
            <div className="board">
            
              <Key val='('/>
              <Key val=')'/>
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
              <Key val='+'/>
              
            </div>
          </div></>
      );
    }
  

 




export default function Calculator() {
 


 

    return (
      <Board />
      
    );
  }