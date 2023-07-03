export const Button = (props) => {
    const {text, onClick, item, setNewItem} = props

    console.log('Button component rerendered')

    return(
        <button
        className="px-6 py-4 mx-2 bg-orange-300"
        key={text}
        onClick={() => {
            setNewItem("")
            return(onClick(item))
            }}>
            {text}
        </button>
    )
}