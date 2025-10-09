import PropTypes from 'prop-types';

export default function CardTypeList(props) {
    const { items, text } = props;

    CardTypeList.propTypes = {
        items : PropTypes.array,
        text  : PropTypes.string
    };

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