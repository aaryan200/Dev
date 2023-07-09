import { useState } from "react";

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        // prevent from refreshing
        e.preventDefault();
        if (newItem === "") return;

        // To change value of array todos, there need to be a function inside setTodos
        onSubmit(newItem);
        setNewItem("");
    }
    return (<form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item" />
        </div>
        <button className="btn">Add</button>
    </form>)
}