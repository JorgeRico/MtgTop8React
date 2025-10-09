import PropTypes from 'prop-types';

function TitleItemBreadcrumb(props) {
    const { title } = props; 
   
    TitleItemBreadcrumb.propTypes = {
        title: PropTypes.string
    };

    return (
        <>
            <div className="left ml10">
                {title}
            </div>
        </>
    );
}

export default TitleItemBreadcrumb;