const Task = ({title, counter, completed, id, setTasks}) => {
    const handleCompleted = () => {
        setTasks(oldvalue => oldvalue.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    const handleDelete = () => {
        setTasks(oldvalue => oldvalue.filter(task => task.id !== id))
    }

    const handleCounter = (diff) => {
        setTasks(oldvalue => oldvalue.map(task => task.id === id ? {...task, counter: task.counter + diff} : task))
    }




    return (
        <div className="task-row">
            <button className={`task-check${completed ? " checked" : ""}`}>{completed ? "✓" : ""}</button>
                <span className={`task-title${completed ? " done" : ""}`}>
                    {title}
                </span>
            <div className="estimate-stepper">
                <button className="stepper-btn" onClick={() => handleCounter(-1)}>−</button>
                <span className="stepper-value">{counter}</span>
                <button className="stepper-btn" onClick={() => handleCounter(1)}>+</button>
            </div>
            <button className="quick-bump">+2</button>
            <button className="icon-danger" onClick={handleDelete}>✕</button>
        </div>
    )
}

export default Task