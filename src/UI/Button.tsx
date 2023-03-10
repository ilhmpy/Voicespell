import styled from "styled-components";

interface ButtonInterface {
   small?: boolean;
   isWork?: boolean;
}

export const Button = styled.button<ButtonInterface>`
     width: 150px;
     height: 40px;
     display: block;
     border-radius: 5px;
     background: #882D89;
     color: #fff;
     transition: 0.3s;
     margin-right: 5px;

     &: hover {
        background: rgb(94, 1, 94);
     }

     svg {
        width: 25px;
        height: 25px;
        margin-top: 3px;
        fill: #fff;
     }

     ${({ small }) => small && `width: 45px; height: 40px;`}
     ${({ isWork }) => isWork != null && isWork == false && `background: rgb(94, 1, 94);`}
`;