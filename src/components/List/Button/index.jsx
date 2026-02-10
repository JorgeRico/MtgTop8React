export default function Button({ buttonText, id }) {
    return (
        <>
            <button id={id} className="listButton right bg-red border-grey radius5 color-white f14 pointer">
                {buttonText}
            </button>
        </>
    )
}