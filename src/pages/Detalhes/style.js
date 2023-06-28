import styled from "styled-components";


export const BannerDetail = styled.div `
    height: 500px;
    background-image: url(${(props => props.url)});
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
    opacity: 0.8;
`

export const Content = styled.div `

    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(5px);
    width: 850px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    column-gap: 30px;
    
    border-radius: 10px;
    padding: 30px;
    margin-top: -200px;
    margin-bottom: 50px;
    position: relative;    

    ul{
        //list-style-position: inside;
        list-style: none;
        margin: 20px 0;

        li{
            margin-bottom: 5px;
        }

    }

    h1{
        font-size: 24px;
    }

    h2{
        font-size: 18px;
        font-style: italic;
    }

    p{
        //text-align: justify;
        line-height: 140%;
    }

    button{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: white;
            color: black;
        }
    }
`