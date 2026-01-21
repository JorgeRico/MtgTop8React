import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./module.css"

function Pagination(props){
    const { total, itemsPerPage, currentPage, setCurrentPage } = props;

    const [ firstPage ]               = useState(1);
    const [ lastPage ]                = useState(Math.ceil(total / itemsPerPage));
    const [ pageArray, setPageArray ] = useState([]) 

    const handleClick = (number) => {
        setCurrentPage(number);
    }

    const handleClickNext = () => {
        setCurrentPage(currentPage+1);
    }

    const handleClickPrevious = () => {
        setCurrentPage(currentPage-1);
    }

    const getPageNumbersArray = () => {
        setPageArray([...Array(Math.ceil(lastPage)).keys()].map(x => ++x));
    }

    useEffect(() => {
        getPageNumbersArray();
    }, [])

    return ( 
        <>
            <section className="left w100 grey-top">
                <section className="left padPagination">
                    Total Past Leagues: {total}
                </section>
                <section className="right padPagination">
                    <article key={uuidv4()} className="left mr-2.5">
                        Pages: 
                    </article>
                    {currentPage > firstPage &&
                        <article key={uuidv4()} className="left">
                            <button className="arrowButton pointer" onClick={() => handleClickPrevious()}> 
                                <span>&#171;</span>
                            </button>
                        </article> 
                    }
                    {pageArray?.map((number) => (
                        <article key={uuidv4()} className="left">
                            <button disabled={number == currentPage} className={number != currentPage ? "pagButton pointer" : "pagButton disabled"} onClick={() => handleClick(number)}>{number}</button>
                        </article>      
                    ))}
                    {currentPage < lastPage &&
                        <article key={uuidv4()} className="left">
                            <button className="arrowButton pointer" onClick={() => handleClickNext()}>
                                <span>&#187;</span>
                            </button>
                        </article> 
                    }
                </section>
            </section>
        </>
    );
}

export default Pagination;