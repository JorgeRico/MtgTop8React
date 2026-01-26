export default function TopStatsList(props) {
    const { isPlayer } = props;

    const topPlayerStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-red p5 mb10">
                    <span className="left ml25">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </>
        )
    }

    const topCardStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-red p5 mb10">
                    <span className="left ml15 w-15">&nbsp;</span>
                    <span className="left ml15">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="left w100">
                {isPlayer === true ? (
                        topPlayerStats()
                    ) : (
                        topCardStats()
                    )
                }
            </div>
        </>
    )
}