import { useState } from 'react';
import Column from './components/Column';
import CreateTask from './components/CreateTask';

const taskStatuses = ['Задача', 'Процессе', 'Рассматривается', 'Завершено'];

const initialState = [
  { id: 1, title: 'Встреча', status: 'Задача', priority: 1 },
  { id: 2, title: 'Закончить проект', status: 'Процессе', priority: 2 },
  { id: 3, title: 'Подкаст', status: 'Рассматривается', priority: 3 },
  { id: 4, title: 'Экзамен', status: 'Завершено', priority: 4 },
];

function App() {
  const [tasks, setTasks] = useState(initialState);

  const onStateChange = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const onCreateTasks = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Задача' }]);
  };

  return (
    <div className="container">
      <CreateTask onSubmit={onCreateTasks} />
      <div className="row" style={{ textAlign: 'center' }}>
        {taskStatuses.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks}
            statuses={taskStatuses}
            onStateChange={onStateChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
