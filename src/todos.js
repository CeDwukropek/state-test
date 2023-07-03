export function Todos(props) {
    const {todos} = props

    console.log('Todos component rerendered')

    return(
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}