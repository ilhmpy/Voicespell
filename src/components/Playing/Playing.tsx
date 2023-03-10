import { FlexBlock } from "../../UI/FlexBlock";
import { Button, Block } from "../../UI";
import { ReactComponent as SoundSVG } from "../../static/sound.svg";
import { ReactComponent as ReplaceSVG } from "../../static/replace.svg";
import { useEffect, useState } from "react";
import { PlayingInput, PlayingAlarm } from "./components";
import { WordsInterface } from "../../types";

export const Playing = () => {
    const [hiddenWord, setHiddenWord] = useState<number>(0);
    const [defaultWords, setDefaultWords] = useState<WordsInterface[]>([
        { word: 'Tätigkeit', articel: 'die', isVerb: false }, 
        { word: 'Fahrkarte', articel: 'die', isVerb: false },
        { word: 'Verkehr', articel: 'der', isVerb: false }, 
        { word: 'ausschreiben', isVerb: true },
        { word: 'abschreiben', isVerb: true },
        { word: 'einfühlen', isVerb: true },
        { word: 'Entwicklung', articel: 'die', isVerb: false }, 
        { word: 'Ergebniss', articel: 'das', isVerb: false }, 
        { word: 'Hund', articel: 'der', isVerb: false }, 
        { word: 'Hausaufgabe', articel: 'die', isVerb: false },
        { word: 'Lehrer', articel: 'der', isVerb: false },
        { word: 'Heft', articel: 'das', isVerb: false },
        { word: 'Telefon', articel: 'das', isVerb: false },
        { word: 'Katze', articel: 'die', isVerb: false },
        { word: 'Oberschenkelknochen', articel: 'der', isVerb: false },
        { word: 'ausmessen', isVerb: true },
        { word: 'Bewerbung', articel: 'die', isVerb: false },
        { word: 'Verantwortung', articel: 'die', isVerb: false },
        { word: 'Satz', articel: 'der', isVerb: false },
        { word: 'Wort', articel: 'das', isVerb: false }
    ])
    const [words, setWords] = useState<WordsInterface[] | null>(null);
    const [hiddenWordValue, setHiddenWordValue] = useState<string>('');

    const randomWord = (list: WordsInterface[]) => {
        return Math.floor(Math.random() * list.length);
    };

    useEffect(() => {
        const rWord = randomWord(defaultWords);
        setWords(defaultWords)
        setHiddenWord(rWord);
    }, []);

    const handleSoundButton = () => {
        if (words) {
            let speech = new SpeechSynthesisUtterance(words[hiddenWord].word);
            speech.lang = 'de-DE'
            speech.rate = 0.5;

            speechSynthesis.speak(speech);
        }
    };

    const handleReplaceButton = () => {
        if (words) {
            if (hiddenWordValue == words[hiddenWord].word) {
                let filterWords; 
                if (words.length > 1) {
                    filterWords = words.filter((b, idx) => idx != hiddenWord);
                } else {
                    filterWords = defaultWords;
                }
                setHiddenWord(randomWord(filterWords));
                setWords(filterWords);
                setHiddenWordValue('');
            }
        }
    }

    return (
        <>
            {words != null && (
                <div>
                    <FlexBlock justifyContent="left" wrap>
                        <PlayingInput 
                            setValue={setHiddenWordValue}
                            value={hiddenWordValue}
                            hideWord={words[hiddenWord].word}
                            hideWordObject={words[hiddenWord]}
                        />
                        <Button small onClick={handleSoundButton}>
                            <SoundSVG />
                        </Button>
                        <Button small onClick={handleReplaceButton} isWork={hiddenWordValue == words[hiddenWord].word}>
                            <ReplaceSVG />
                        </Button>
                    </FlexBlock>
                    <PlayingAlarm 
                        hiddenWordValue={hiddenWordValue}
                        hideWord={words[hiddenWord].word}
                    />
                </div>
            )}
        </>
    )
}