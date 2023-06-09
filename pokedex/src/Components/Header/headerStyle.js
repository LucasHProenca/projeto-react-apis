import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
flex-direction: row;
width: 100%;
height: 15vh;
position: absolute;

img{
    width: 22%;
    height: 70%;
    position: absolute;
    left: 39%;
}

button{
    height: 46%;
    width: 20%;
    margin-right: 3%;
    background-color: #33A4F5;
    color: #FFFFFF;
    font-size: 2.4rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    border-radius: 0.8rem;
    cursor: pointer;
    position: absolute;
    right: 3%;
    top: 20%;
}
div{
    display: flex;
    flex-direction: row;
    width: 20%;
    position: absolute;
    top: 25%;
}

span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-decoration-line: underline;
    color: #1A1A1A;
    margin-left: 5%;
    cursor: pointer;
    
}
`

export const Arrow = styled.aside`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #1A1A1A;
    margin-left: 5%;
    
`