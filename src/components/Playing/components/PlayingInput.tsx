import styled from "styled-components";
import { FC } from "react";
import { WordsInterface } from "../../../types";
import { firstCase } from "../../../functions";

interface InputInterface { 
    right: boolean;
}

interface PlayingInputInteface {
    setValue: (value: string) => void;
    value: string;
    hideWord: string;
    hideWordObject: WordsInterface;
}

export const PlayingInput: FC<PlayingInputInteface> = ({
    setValue,
    value,
    hideWord,
    hideWordObject
}) => {
    const handleHiddenWordInput = (e: any) => {
        const value = e.target.value;
        setValue(hideWordObject.isVerb ? firstCase(value, true) : firstCase(value));
    };

    return (
        <Input 
            placeholder="Введіть загадане слово"
            maxLength={hideWord.length}
            onChange={handleHiddenWordInput} 
            value={value}
            right={value == hideWord}
        />
    )
}

export const Input = styled.input<InputInterface>`
    display: block;
    padding: 15px;
    width: 215px;
    height: 40px;
    border: 2px solid rgb(136, 45, 137);
    border-radius: 10px;
    font-family: Roboto, 'sans-serif';
    font-weight: 400;
    margin-right: 5px;
    
    ${({ right }) => right ? 'color: green;' : 'color: red;'}
`;