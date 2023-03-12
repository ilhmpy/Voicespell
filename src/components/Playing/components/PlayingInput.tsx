import styled from "styled-components";
import { FC } from "react";
import { WordsInterface } from "../../../types";
import { firstCase } from "../../../functions";
import { useTranslation } from "react-i18next";

interface InputInterface { 
    right: boolean;
    artikels: boolean;
}

interface PlayingInputInteface {
    setValue: (value: string) => void;
    value: string;
    hideWord: string;
    hideWordObject: WordsInterface;
    artikel: string;
}

export const PlayingInput: FC<PlayingInputInteface> = ({
    setValue,
    value,
    hideWord,
    hideWordObject,
}) => {
    const { t } = useTranslation();

    const handleHiddenWordInput = (e: any) => {
        const value = e.target.value;
        setValue(hideWordObject.isVerb ? firstCase(value, true) : firstCase(value));
    };

    return (
        <Input 
            /* @ts-ignore: problems with type from HTML Input types*/
            placeholder={t("playMenu.inputPlaceholder")}
            maxLength={hideWord.length}
            onChange={handleHiddenWordInput} 
            value={value}
            right={value == hideWord}
            artikels={!hideWordObject.isVerb}
        />
    )
}

export const Input = styled.input<InputInterface>`
    display: block;
    padding: 15px;
    width: 175px;
    height: 40px;
    border: 2px solid rgb(136, 45, 137);
    border-radius: 10px;
    font-family: Roboto, 'sans-serif';
    font-weight: 400;
    margin-right: 5px;
        
    ${({ right }) => right ? 'color: green;' : 'color: red;'}
    ${({ artikels }) => artikels ? '' : 'width: 240px;'}
`;