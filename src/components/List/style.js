import styled from "styled-components";

export const CardsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: center;
`

export const CardItem = styled.div`
    max-width: 360px;
    position: relative;
    
    img{
        border-radius: 10px;
        opacity: 0.7;

        &:hover{
            opacity: 1;
        }
    }

    .card-content{        
        position: absolute; //posição em relação ao elemento PAI (desde que ele tenha position)
        bottom: 15px;
        left: 15px;
        text-shadow: 2px 2px 1px black; //sobra Horizontal, vertical, suavidade, cor
        color: white;

        h2{
            font-size: 24px;
            width: 100%;                
        }

        h3{
            font-size: 16px;                     
        }
        
    }
    
`

