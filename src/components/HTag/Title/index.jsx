import HTag from "/src/components/HTag";

function Title(props) {
    const { title } = props; 

    return (
        <>
            <HTag Tag="h1" className="f24" text={title} />
        </>
    );
}

export default Title;