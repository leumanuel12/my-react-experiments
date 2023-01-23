import { ACTIONS } from "../pages/TodoList";


export default function Todo({ list, dispatch }) {
    return (<>
        <div className={"md:grid md:grid-cols-4 border-b border-gray-400 "+(list.complete ? "bg-green-400" : " ")}>
            <div className="flex justify-center col-span-1 p-2">
                <input type="checkbox" onChange={(e) => {
                    dispatch({ type: ACTIONS.TODO_TOGGLE, payload: { id: list.id }})
                }}/>
            </div>
            <div className="flex justify-center col-span-1 p-2">{list.id}</div>
            <div className="flex justify-center col-span-1 p-2">{list.name}</div>
            <div className="flex justify-center col-span-1 p-2">
                <button
                    onClick={ () => { dispatch({ type: ACTIONS.TODO_DELETE, payload: { id: list.id }}) } }>Delete</button>
            </div>
        </div>
    </>)
};
