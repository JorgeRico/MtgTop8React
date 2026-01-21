import ModalPopUp from "/src/components/Modal";

export default function DeckCard(props) {
    const { card } = props;

    return (
        <>
            <article className="cardItem">
                {card.num} {card.name}
                <span className="modalImg">
                    <ModalPopUp img={card.imgUrl} name={card.name} modalType={`deck-${card.id}`} />
                </span>
            </article>
        </>
    )
}