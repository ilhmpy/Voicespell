import { Title } from "./StartPlay.styles";
import { Button } from "../../UI/Button";
import { FlexBlock } from "../../UI/FlexBlock";
import { FC } from "react";
import { Languages } from "../Languages/Languages";
import { useTranslation } from "react-i18next";

interface StartPlayInterface {
    setPlay: (play: boolean) => void; 
}

export const StartPlay: FC<StartPlayInterface> = ({ setPlay }) => {
    const { t } = useTranslation();

    const handleClick = (e: any) => {
        setPlay(true);
    };

    return (
        <div>
            <Title>{t("startMenu.startTitle")}</Title>
            <FlexBlock>
                <Button onClick={handleClick}>{t("startMenu.play")}</Button>
            </FlexBlock>
            <Languages />
        </div>
    )
};