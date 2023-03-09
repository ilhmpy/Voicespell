import styled from "styled-components"

interface FlexBlock {
    justifyContent?: string;
    wrap?: boolean;
}

export const FlexBlock = styled.div<FlexBlock>`
    width: 100%;
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    
    ${({ wrap }) => {
        if (wrap) {
            return `
                flex-wrap: wrap;
            `;
        } else {
            return ``;
        }
    }}
`;