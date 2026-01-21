export default function CardTypeList(props) {
    const { items, text } = props;

    return (
        <>
            {(items.length > 0) && (
                <div className="deckItems mb10">
                    <h4>{text}</h4>
                    {items}
                </div>
            )}
        </>
    )
}