import { FlexBlock } from "../../UI/FlexBlock";
import { Button, List } from "../../UI";
import { ReactComponent as SoundSVG } from "../../static/sound.svg";
import { ReactComponent as ReplaceSVG } from "../../static/replace.svg";
import { useEffect, useState } from "react";
import { PlayingInput, PlayingAlarm } from "./components";
import { WordsInterface } from "../../types";
import { firstCase } from "../../functions";

export const Playing = () => {
    const [hiddenWord, setHiddenWord] = useState<number>(0);
    const [defaultWords, setDefaultWords] = useState<WordsInterface[]>([
        { word: 'Tätigkeit', artikel: 'die', isVerb: false }, 
        { word: 'Fahrkarte', artikel: 'die', isVerb: false },
        { word: 'Verkehr', artikel: 'der', isVerb: false },
        { word: 'ausschreiben', isVerb: true },
        { word: 'abschreiben', isVerb: true },
        { word: 'einfühlen', isVerb: true },
        { word: 'Entwicklung', artikel: 'die', isVerb: false }, 
        { word: 'Ergebniss', artikel: 'das', isVerb: false }, 
        { word: 'Hund', artikel: 'der', isVerb: false }, 
        { word: 'Hausaufgabe', artikel: 'die', isVerb: false },
        { word: 'Lehrer', artikel: 'der', isVerb: false },
        { word: 'Heft', artikel: 'das', isVerb: false },
        { word: 'Telefon', artikel: 'das', isVerb: false },
        { word: 'Katze', artikel: 'die', isVerb: false },
        { word: 'Oberschenkelknochen', artikel: 'der', isVerb: false },
        { word: 'ausmessen', isVerb: true },
        { word: 'Bewerbung', artikel: 'die', isVerb: false },
        { word: 'Verantwortung', artikel: 'die', isVerb: false },
        { word: 'Satz', artikel: 'der', isVerb: false },
        { word: 'Wort', artikel: 'das', isVerb: false }
    ])
    const [words, setWords] = useState<WordsInterface[] | null>(null);
    const [hiddenWordValue, setHiddenWordValue] = useState<string>('');
    const [artikels, setArtikels] = useState<string[]>(['Der', 'Die', 'Das']);
    const [artikel, setArtikel] = useState<string>(artikels[0]);

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
            if (
                words[hiddenWord].isVerb ?
                hiddenWordValue == words[hiddenWord].word :
                hiddenWordValue == words[hiddenWord].word && words[hiddenWord].artikel == firstCase(artikel, true)
            ) {
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
                        {!words[hiddenWord].isVerb && (
                            <List 
                                data={artikels} 
                                setArtikel={setArtikel} 
                                artikel={artikel}
                            />
                        )}
                        <PlayingInput 
                            setValue={setHiddenWordValue}
                            value={hiddenWordValue}
                            hideWord={words[hiddenWord].word}
                            hideWordObject={words[hiddenWord]}
                            artikel={artikel}
                        />
                        <Button small onClick={handleSoundButton}>
                            <SoundSVG />
                        </Button>
                        <Button 
                            small 
                            onClick={handleReplaceButton} 
                            isWork={
                                words[hiddenWord].isVerb ?
                                hiddenWordValue == words[hiddenWord].word :
                                hiddenWordValue == words[hiddenWord].word && words[hiddenWord].artikel == firstCase(artikel, true)
                            }
                        >   
                            <ReplaceSVG />
                        </Button>
                    </FlexBlock>
                    <PlayingAlarm 
                        hiddenWordValue={hiddenWordValue}
                        hideWord={words[hiddenWord].word}
                        artikel={artikel}
                        hideWordObject={words[hiddenWord]}
                    />
                </div>
            )}
        </>
    )
}