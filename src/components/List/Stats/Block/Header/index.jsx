import PropTypes from 'prop-types';

export default function TopStatsList(props) {
    const { isPlayer } = props;

    TopStatsList.propTypes = {
        items : PropTypes.array
    };

    const topPlayerStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-footer p5 mb10">
                    <span className="left ml25">Total</span>
                    <span className="left ml15">Name</span>
                </div>
            </>
        )
    }

    const topCardStats = () => {
        return (
            <>
                <div className="cardItem overflowHidden bg-footer p5 mb10">
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