import { Title } from "./StartPlay.styles";
import { Button } from "../../UI/Button";
import { FlexBlock } from "../../UI/FlexBlock";
import { FC } from "react";
import { Languages } from "../Languages/Languages";

interface StartPlayInterface {
    setPlay: (play: boolean) => void; 
}

export const StartPlay: FC<StartPlayInterface> = ({ setPlay }) => {
    const handleClick = (e: any) => {
        setPlay(true);
    };

    return (
        <div>
            <Title>Гра на перевірку правописання німецьких слів</Title>
            <FlexBlock>
                <Button onClick={handleClick}>ГРАТИ</Button>
            </FlexBlock>
            <Languages />
        </div>
    )
};