export default function HTag({ Tag, className, text }) {
    return (
        <Tag className={className}>
            {text}
        </Tag>
    );
}