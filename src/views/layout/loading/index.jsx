import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

function LoadingLayout({ name, children }) {

    const classNameStyles = `overflowHidden container ${name}`;

    return (
        (
            <>
                <Header classNameStyles={classNameStyles}></Header>
                <main className={classNameStyles}>
                    <section className={`left w100 ${name}`}>
                        <article className="pBody overflowHidden">
                            {children}
                        </article>
                    </section>
                </main>
                <Footer></Footer>
              </>
        )
    );
}

export default LoadingLayout;
