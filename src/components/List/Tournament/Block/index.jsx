import cupIcon from '/src/assets/images/cup.png';
import Button from "/src/components/List/Button";

export default function TournamentItem(props) {
    const { name, description, buttonText } = props;

    return (
        <>
            <div className="left w100 mb10 bg-footer radius5">
                <div className="wAuto padBox overflowHidden">
                    <div className="cupBox border-grey left radius5 bg-blue p5 w-25">
                        <img src={cupIcon} width="15" height="14" alt="Cup Champion" className="cupIcon w-15" />
                    </div>
                    <div className="left format wAuto ml25 tournamentDescription">
                        <strong>{name}</strong>
                        <br></br>
                        <span className="left f12 mt5" style={{whiteSpace: 'pre-wrap'}}>
                            {description}
                        </span>
                    </div>
                    <Button buttonText={buttonText}></Button>
                </div>
            </div>
        </>
    )
}