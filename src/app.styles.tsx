import styled from "styled-components";

interface ModalType {
    play: boolean;
}

export const Modal = styled.div<ModalType>`
   background: rgb(255, 255, 255);
   padding: 1% 40px;
   border-radius: 10px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;    
   padding-bottom: 15px;
   border: 2px solid rgb(136, 45, 137);

   ${({ play }) => play ? `width: 430px; height: auto;` : `width: 400px; height: auto;`}
`;