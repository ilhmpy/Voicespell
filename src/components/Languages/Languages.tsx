import styled from "styled-components";
import { ReactComponent as UsaSVG } from "../../static/usa.svg";

export const Languages = () => {
    return (
        <LanguagesContainer>    
            <LanguagesContainerItem>
                <div className="sky"></div>
                <div className="field"></div>
            </LanguagesContainerItem> 
            <LanguagesContainerItem>
                <UsaSVG />
            </LanguagesContainerItem>
        </LanguagesContainer>  
    )
}

export const LanguagesContainer = styled.div`
    width: 110px;
    height: 40px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    padding: 5px 10px;
`;

export const LanguagesContainerItem = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;
    text-align: center;
    display: flex;
    flex-direction: column;

    &:hover {
        border: 2px solid rgb(94, 1, 94);
    }

    svg {
        width: 100%:
        height: 100%;
    }

    .sky {
        width: 100%;
        height: 50%;
        background: #005BBB;
    }

    .field {
        width: 100%;
        height: 50%;
        background: #FED81E;
    }
`;