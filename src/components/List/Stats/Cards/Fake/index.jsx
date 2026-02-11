import { v4 as uuidv4 } from "uuid";
import stats from "/src/fakeData/statsList.jsx";
import ContentStatsList from "/src/components/List/Stats/Block/Content";

function LoadingCards() {
    return (
        <>
            <div className="left w100 overflowHidden blink blured">
                {stats.map(item =>
                    <ContentStatsList item={item} isPlayer={false} text={item.name} key={uuidv4()} />
                )}
            </div>
        </>
    );
}

export default LoadingCards;