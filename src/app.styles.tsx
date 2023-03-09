import styled from "styled-components";

interface ModalType {
    play: boolean;
}

export const Modal = styled.div<ModalType>`
   background: rgb(255, 255, 255);
   padding: 40px;
   border-radius: 10px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;    

   ${({ play }) => play ? `width: 330px; height: auto;` : `width: 300px; height: auto;`}
`;