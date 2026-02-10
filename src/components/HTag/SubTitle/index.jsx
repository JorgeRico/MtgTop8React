import HTag from "/src/components/HTag";

function SubTitle({ title }) {
    return (
        <>
            <HTag Tag="h2" text={title} className="left mb15 f20" />
        </>
    );
}

export default SubTitle;