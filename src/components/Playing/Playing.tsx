import { FlexBlock } from "../../UI/FlexBlock";
import { Input, WordIndicator, WordIndicatorBox, WordSpanResult } from "./Playing.styles";
import { Button, Block } from "../../UI";
import { ReactComponent as SoundSVG } from "../../static/sound.svg";
import { ReactComponent as ReplaceSVG } from "../../static/replace.svg";
import { useEffect, useState } from "react";

export const Playing = () => {
    const [hiddenWord, setHiddenWord] = useState<number>(0);
    const [words, setWords] = useState<string[]>([
        'Tätigkeit', 'Fahrkarte', 'Verkehr', 'auschreiben', 'abschreiben',
        'einfühlen', 'Entwicklung', 'Ergebniss', 'Hund', 'Hausaufgaben',
        'Lehrer', 'Heft', 'Telefon', 'Katze', 'Oberschenkelknochen',
        'ausmessen', 'Bewerbung', 'Verantwortung', 'Satz', 'Wort'
    ]);
    const [ hiddenWordValue, setHiddenWordValue ] = useState<string>('');

    const randomWord = () => Math.floor(Math.random() * words.length);

    useEffect(() => {
        setHiddenWord(randomWord());
    }, []);

    const handleSoundButton = () => {
        let speech = new SpeechSynthesisUtterance(words[hiddenWord]);
        speech.lang = 'de-DE'
        speech.rate = 0.5;

        speechSynthesis.speak(speech);
    };

    const handleReplaceButton = () => {
        setHiddenWord(randomWord());
        setHiddenWordValue('');
    }

    const handleHiddenWordInput = (e: any) => {
        const value = e.target.value;
        setHiddenWordValue(value);
    };

    return (
        <div>
            <FlexBlock justifyContent="left" wrap>
                <Input 
                    placeholder="Введіть загадане слово" 
                    maxLength={typeof hiddenWord == 'number' ? words[hiddenWord].length : 0}
                    onChange={handleHiddenWordInput} 
                    value={hiddenWordValue}
                    right={hiddenWordValue == words[hiddenWord]}
                />
                <Button small onClick={handleSoundButton}>
                    <SoundSVG />
                </Button>
                <Button small onClick={handleReplaceButton}>
                    <ReplaceSVG />
                </Button>
            </FlexBlock>
            {hiddenWordValue != words[hiddenWord] && hiddenWordValue != '' && (
                <Block>
                    <WordIndicatorBox>
                        {hiddenWordValue.split('').map((b, idx) => (
                            <WordIndicator key={idx} right={b == words[hiddenWord][idx]}>{b}</WordIndicator>                            
                        ))}
                    </WordIndicatorBox>
                </Block>
            )}
            {hiddenWordValue == words[hiddenWord] && (
                <WordSpanResult>Ти впорався!</WordSpanResult>
            )}
        </div>
    )
}