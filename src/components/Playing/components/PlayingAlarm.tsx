import { FC } from "react"
import styled from "styled-components";
import { firstCase } from "../../../functions";
import { WordsInterface } from "../../../types";
import { Block } from "../../../UI/Block";
import { useTranslation } from "react-i18next";

interface PlayingAlarm {
    hiddenWordValue: string;
    hideWord: string;
    hideWordObject: WordsInterface;
    artikel: string;
}

interface WordAlarmInterface {
    hiddenWordValue: string;
    hideWord: string;
    artikel?: string;
    hideWordObject: WordsInterface;
}

interface WordIndicatorInterface {
    right: boolean;
}

export const PlayingAlarm: FC<PlayingAlarm> = ({
    hiddenWordValue,
    hideWord,
    hideWordObject,
    artikel,
}) => {
    return (
        <>
            {hideWordObject.isVerb ? (
                hiddenWordValue != hideWord
                    && (
                        <WordAlarm 
                            hiddenWordValue={hiddenWordValue}
                            hideWord={hideWord}
                            hideWordObject={hideWordObject}
                            artikel={firstCase(artikel, true)}
                        />
                    )
                
            ) : (
                (hiddenWordValue != hideWord || hideWordObject.artikel != firstCase(artikel, true))
                && (
                    <WordAlarm 
                        hiddenWordValue={hiddenWordValue}
                        hideWord={hideWord}
                        hideWordObject={hideWordObject}
                        artikel={firstCase(artikel, true)}
                    />
                )
            )}
            {hideWordObject.isVerb ? (
                hiddenWordValue == hideWord && (
                    <WordSpanResultText />
                )
            ) :
                hiddenWordValue == hideWord && hideWordObject.artikel == firstCase(artikel, true) && (
                    <WordSpanResultText />
            )}
        </>
    )
}

const WordSpanResultText = () => {
    const { t } = useTranslation();

    return (
        <WordSpanResult>{t("playMenu.win")}</WordSpanResult>
    )
}

const WordAlarm: FC<WordAlarmInterface> = ({
    hiddenWordValue,
    hideWord,
    artikel,
    hideWordObject,
}) => {
    return (
        <>
            {hiddenWordValue != '' && (
                <Block>
                    <WordIndicatorBox>
                        {!hideWordObject.isVerb && (
                            <WordIndicator right={hideWordObject.artikel == artikel}>{artikel}</WordIndicator>
                        )}
                        {hiddenWordValue.split('').map((b, idx) => (
                            <WordIndicator key={idx} right={b == hideWord[idx]}>{b}</WordIndicator>                            
                        ))}
                    </WordIndicatorBox>
                </Block>
            )}
        </>
    )
}

export const WordIndicator = styled.span<WordIndicatorInterface>`
    margin-left: 4px;
    font-weight: 600;
    display: block;
    padding: 0;
    margin-top: 10px;
    transition: 1s;

    ${({ right }) => right ? 'color: green; border-bottom: 1px solid green;' : `
        color: red; 
        border-bottom: 1px solid red;
        transition: 4s;
        font-weight: 800;
        animation-name: falseB;
        animation-duration: 4s;

        @keframes falseB {
            0% { margin-top: 50px; }
            100% { margin-top: 10px;}
        }
    `}
`;

export const WordIndicatorBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
`;

export const WordSpanResult = styled.span`
    color: green;
    margin-top: 10px;
    transition: 1s;
    display: block;
    user-select: none;
`;
