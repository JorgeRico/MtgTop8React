import ModalPopUp from "/src/components/Modal";

export default function ContentStatsList(props) {
    const { item, isPlayer, text } = props;

    const playerStats = (item) => {
        return (
            <>
                <span className="left ml30 center w-25">{item.num}</span>
                <span className="left ml20">
                    {item.name}
                </span>
            </>
        )
    }

    const cardStats = (item) => {
        return (
            <>
                <span className="left ml15">
                    <ModalPopUp img={item.imgUrl} name={item.name} modalType={`stats-${text}-`} />
                </span>
                <span className="left ml10 w-30 center">{item.num}</span>
                <span className="left ml20">
                    {item.name}
                </span>
            </>
        )
    }

    return (
        <>
            <div className="left w100 cardItem">
                {(isPlayer === true) ? (
                    playerStats(item)
                ) : (
                    cardStats(item)
                )}
            </div>
        </>
    )
}