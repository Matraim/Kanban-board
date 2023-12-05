const Column = (props) => {
  return (
    <div className="col">
      <h3>{props.status}</h3>
      {props.tasks
        .filter((task) => task.status === props.status)
        .sort((a, b) => b.priority - a.priority)
        .map((task) => (
          <div
            className="card"
            key={task.id}
            style={{ padding: '15px', margin: '15px' }}
          >
            <div className="card-body">
              <h4 className="card-title">{task.title}</h4>
              <p>{task.status}</p>
              <p>{task.priority}</p>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={task.status}
                onChange={(e) => props.onStateChange(task.id, e.target.value)}
              >
                {props.statuses.map((status) => (
                  <option
                    key={status}
                    value={status}
                    style={{ textAlign: 'center' }}
                  >
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Column;
