export const Button = (props) => (
    <button
    className="px-6 py-4 mx-2 bg-orange-300"
    key={props.text}
    onClick={props.onClick}>
        {props.text}
    </button>
)