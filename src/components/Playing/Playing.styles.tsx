import styled from "styled-components";

interface InputInterface {
    right: boolean;
}

export const Input = styled.input<InputInterface>`
    display: block;
    padding: 15px;
    width: 215px;
    height: 40px;
    border: 2px solid rgb(136, 45, 137);
    border-radius: 10px;
    font-family: Roboto, 'sans-serif';
    font-weight: 400;
    margin-right: 5px;
    
    ${({ right }) => right ? 'color: green;' : 'color: red;'}
`;

export const WordIndicator = styled.span<InputInterface>`
    margin-left: 4px;
    font-weight: 600;
    display: block;
    padding: 0;
    margin-top: 10px;
    transition: 1s;

    ${({ right }) => right ? 'color: green; border-bottom: 1px solid green;' : `
        color: red; 
        border-bottom: 1px solid red;
        transition: 4s;
        font-weight: 800;
        animation-name: falseB;
        animation-duration: 4s;

        @keframes falseB {
            0% { margin-top: 50px; }
            100% { margin-top: 10px;}
        }
    `}
`;

export const WordIndicatorBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
`;

export const WordSpanResult = styled.span`
    color: green;
    margin-top: 10px;
    transition: 1s;
    display: block;
`;
