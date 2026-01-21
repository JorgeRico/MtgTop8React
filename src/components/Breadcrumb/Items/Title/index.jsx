function TitleItemBreadcrumb(props) {
    const { title } = props;

    return (
        <>
            <div className="left ml10">
                {title}
            </div>
        </>
    );
}

export default TitleItemBreadcrumb;