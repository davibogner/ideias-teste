import { useState } from 'react';
import { Div } from './styles';
function Home() {
    return (
        <div>
            <Contador></Contador>
            <div> OLAAAA</div>
            <TempControl></TempControl>            
            
        </div>        
    )             
}
function colorControl(){
    
}
function TempControl(){
    const [temp,setTemp] = useState(20);
    const [colorTemp,setColorTemp] = useState('red');
    function addTemp(){
        setTemp(temp+1);
        if(temp>=20){
            setColorTemp('red');
        }
    }
    function decTemp(){
        setTemp(temp-1);
        if(temp<20){
            setColorTemp('blue');

        }
    }
    return (      
                    
            <Div className={colorTemp}><div>
                <div className='visor'>{temp}</div>
            <button onClick={addTemp}>+</button>
            <button onClick={decTemp}>-</button></div></Div>
        
        )
}
function Contador(){
    const [number,setContador] = useState(1);
    function addNumber(){
        setContador(number+1);        

    }
    function resetNumber(){
        setContador(1);
    } 
    return (
        <div>
            <div>{number}</div>
            <button onClick={addNumber}>ADD</button>
            <button onClick={resetNumber}>RESET</button>
        </div>
    )
}


export default Home;