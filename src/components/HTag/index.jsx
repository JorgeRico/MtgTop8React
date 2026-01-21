export default function HTag(props) {
    const { Tag, className, text } = props;

    return (
        <Tag className={className}>
            {text}
        </Tag>
    );
}