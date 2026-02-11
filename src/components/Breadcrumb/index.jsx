function Breadcrumb({ component, loading }) {
    return (
        <>
            <section className={`left w100 f14 ${loading === false ? 'blink blured' : ''}`}>
                {component}
            </section>
        </>
    );
}

export default Breadcrumb;