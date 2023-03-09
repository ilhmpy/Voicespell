import styled from "styled-components";

interface ModalType {
    play: boolean;
}

export const Modal = styled.div<ModalType>`
   background: rgb(255, 255, 255);
   padding: 25px 40px;
   border-radius: 10px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;    

   ${({ play }) => play ? `width: 400px; height: auto;` : `width: 400px; height: auto;`}
`;