import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TournamentItem from "/src/components/List/Tournament/Block";

export default function TournamentList(props) {
    const { url, items } = props;

    TournamentList.propTypes = {
        url   : PropTypes.string,
        items : PropTypes.array
    };

    return (
        <>
            <section className="tournaments">
                {(items.length > 0) && (
                    items.map((item) => (
                        <div key={uuidv4()} className="left w100 listItem pointer title">
                            <Link key={Math.random()} to={url + item.id}>
                                <TournamentItem name={item.name} description={`Date: ${item.date}   |   ${item.players} players`} buttonText="View Tournament"></TournamentItem>
                            </Link>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}