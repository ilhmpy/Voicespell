import { FlexBlock } from "../../UI/FlexBlock";
import { Input } from "./Playing.styles";
import { Button } from "../../UI/Button";
import { ReactComponent as SoundSVG } from "../../static/sound.svg";
import { useEffect, useState } from "react";

/* 
    1 етап

    1 створюємо список слів
    2 дізнаємось рандомне слово 
    3 змушуємо браузер розмовляти
    4 зберігаємо слово яке загадали
    5 додаємо максимум букв в слові у інпут

    2 етап 

    1 обробляємо введенні данні (перетворюємо отримане слово на массив, теж саме робимо з загаданим словом) перевіряємо чи сходятся усі букви
    2 якщо ні показуємо результат та показуємо конкретні букви які не правильні у цьому слові
*/

export const Playing = () => {
    const [hiddenWord, setHiddenWord] = useState<number>(0);
    const [words, setWords] = useState<string[]>([
        'собака', 'кіт', 'стілець', 'стіл', 'сукня',
        'мама', 'мавпа', 'кінь', 'олень', 'русня',
        'памперс', 'лайно', 'сварог', 'триглав', 'фрея',
        'даждьбог', 'перун', 'одін', 'рід', 'скарби'
    ]);

    useEffect(() => {
        const hiddenWordIdx = Math.floor(Math.random() * words.length);
        speechSynthesis.getVoices();
        setHiddenWord(hiddenWordIdx);
    }, []);

    const handleButton = (e: any) => {
        const voice = speechSynthesis.getVoices()[1];
        console.log(voice)
        let speech = new SpeechSynthesisUtterance('собака');
        speech.lang = 'ru-RU'
        speech.voice = voice;

        speechSynthesis.speak(speech);
    };

    return (
        <FlexBlock justifyContent="left" wrap>
            <Input placeholder="Введіть загадане слово" />
            <Button small onClick={handleButton}>
                <SoundSVG />
            </Button>
        </FlexBlock>
    )
}