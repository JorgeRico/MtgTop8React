export default function CardTypeList({ items, text }) {
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