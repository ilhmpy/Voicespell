import { Title } from "./StartPlay.styles";
import { Button } from "../../UI/Button";
import { FlexBlock } from "../../UI/FlexBlock";
import { FC } from "react";

interface StartPlayInterface {
    setPlay: (play: boolean) => void; 
}

export const StartPlay: FC<StartPlayInterface> = ({ setPlay }) => {
    const handleClick = (e: any) => {
        setPlay(true);
    };

    return (
        <div>
            <Title>Гра на перевірку знань граматики</Title>
            <FlexBlock>
                <Button onClick={handleClick}>ГРАТИ</Button>
            </FlexBlock>
        </div>
    )
};