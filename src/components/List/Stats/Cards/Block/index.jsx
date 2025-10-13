import Button from "/src/components/List/Button";

export default function StatsBox(props) {
    const { text } = props;

    return (
        <>
            <article className="left w100 mb10 bg-footer radius5">
                <div className="wAuto overflowHidden">
                    <div className="left wAuto padStatsBox">
                        <strong>{text}</strong>
                    </div>
                    <div className="right wAuto p10 statsButton">
                        <Button buttonText="View Stats"></Button>
                    </div>
                </div>
            </article>
        </>
    )
}