import styled from "styled-components"
import { FC, useState } from "react"

interface ListInterface {
    data: string[];
    setArtikel: (artikel: string) => void;
    artikel: string;
}

interface ListItemContainerInterface {
    isVision: boolean;
    length: number;
}

export const List: FC<ListInterface> = ({
    data,
    setArtikel,
    artikel
}) => {
    const [isVision, setIsVision] = useState<boolean>(false);

    const switchListItem = (e: any, idx: number) => {
        setArtikel(data[idx]);
    }

    return (
        <ListContainer onClick={() => setIsVision(!isVision)}>
            <ListText>{artikel}</ListText>
            <ListItemContainer 
                isVision={isVision}
                length={data.length}
            >
                {data.map((item, idx) => (
                    <ListItem key={idx} onClick={(e) => switchListItem(e, idx)}>{item}</ListItem>
                ))}
            </ListItemContainer>
        </ListContainer>        
    )   
}

const ListContainer = styled.div`
    width: 65px;
    height: 40px;
    border: 2px solid rgb(94, 1, 94);
    border-radius: 10px;
    margin-right: 5px;
    padding: 8.4px 7px;
    color: rgb(94, 1, 94);
    cursor: pointer;
    position: relative;
    transition: 1s;
    user-select: none;
`;

const ListItem = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 2px solid rgb(94, 1, 94);
    display: block;
    padding: 1px;
    padding-left: 7px;
    padding-top: 9px;

    &:hover {
        background: rgb(94, 1, 94);
        color: #fff;
    }
`;

const ListItemContainer = styled.div<ListItemContainerInterface>`
    width: 65px;
    height: ${({ length }) => length && length * 40}px;
    background: #fff;
    border-radius: 10px;
    border: 2px solid rgb(94, 1, 94);
    position: absolute;
    left: -1.10px;
    bottom: -121px;
    display: ${({ isVision }) => isVision ? "flex" : "none"};
    flex-wrap: wrap;
    overflow: hidden;
`;

const ListText = styled.span``;