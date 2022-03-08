interface Props {
    content: string
    bgColor: string // Can Be A Enum Of Fixed Colors
}

const YIEButton: React.FC<Props> = ({ content, bgColor }) => {
    return (
        <button className={bgColor === 'red' ? 'bg-red-700' : bgColor === 'blue' ? 'bg-blue-700' : ''}>
            {content}
        </button>
    )
}

export default YIEButton