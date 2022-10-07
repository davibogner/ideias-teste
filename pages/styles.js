import styled from 'styled-components/';




export const Div = styled.div`
    display: flexbox; 
    border-radius:20px;    
    background-color: ${(props)=>props.className};
    width: 160px;
    border: 5px solid black;
    justify-content: center;   
    margin: 20px;
    
     
    
    div {
        justify-content:center;
        font-size: 50px; 

        & .visor {
        border-radius:15px;
        border:3px solid black;
        text-align:center;
        background-color:grey  ;

    }
    }
    
    button{
        
        background-color: black;
        border-radius: 12px;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline;
        font-size: 16px;
        margin: 4px 2px;
    }
`