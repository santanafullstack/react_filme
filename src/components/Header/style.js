import styled from "styled-components";

export const HeaderApp = styled.header `
    background-color: #000715;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    nav{
        display: flex;
        column-gap: 80px;

        a{
            color: #ffffff;
            text-decoration: none;

            &:hover{
                color: #00B1E9;
            }

        }

    }
`
