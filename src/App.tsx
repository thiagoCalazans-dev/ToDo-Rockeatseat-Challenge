import { Header } from "./components/Header";
import { Task } from "./components/Task";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import "./global.css";
import { Empty } from "./components/Empty";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ITask } from "./components/interface/Task";
import {v4 as uuidv4} from "uuid"



function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  const createdTasks = taskList.length;
  const completedTask = taskList.filter((task) => task.isCompleted).length;
  const sortedTaskListbyFalse = taskList.sort((x, y) => { return Number(x.isCompleted) - Number(y.isCompleted);})

  const handleCreateTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault()
    let newTask: ITask = {
      id: uuidv4(),
      descripition: taskDescription,
      isCompleted:false
      
    }
    setTaskList([...taskList, newTask]);
    setTaskDescription("");

  }

  const HandleDelete = (id: string) => {
    const taksWithouTheDeletedOne = taskList.filter((task) => {
      return task.id !== id
    })
    setTaskList(taksWithouTheDeletedOne)
  }

  const HandleCheck = (task: ITask) => {
    const taksWithouTheDeletedOne = taskList.filter((item) => {
      return item.id !== task.id
    })
    const updatedTask = {...task, isCompleted: !task.isCompleted}
    const newList = ([...taksWithouTheDeletedOne, updatedTask])
    const newsortedList = newList.sort((x, y) => { return Number(x.isCompleted) - Number(y.isCompleted);})
    setTaskList(newsortedList)
  }

  const isNewTaskEmpty = taskDescription.length === 0

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <form onSubmit={handleSubmitTask}>
          <input
            value={taskDescription}
            onChange={handleCreateTaskInput}
            placeholder="Adicione uma nova tarefa"   
            required          
                />
          <button disabled={isNewTaskEmpty}>
            Criar <PlusCircle size="1rem" weight="bold" />
          </button>
        </form>
        <div className={styles.taskBox}>
          <header>
            <strong className={styles.createdTasks}>
              Tarefas criadas
              <span className={styles.counter}>{createdTasks}</span>
            </strong>
            <strong className={styles.completedTasks}>
              Concluídas<span className={styles.counter}>{completedTask}</span>
            </strong>
          </header>
          <ul className={styles.taskList}>
            {taskList.length === 0 ? (
              <Empty />
            ) : (
              sortedTaskListbyFalse.map((task) => (
                <Task
                  onDelete={HandleDelete}
                  onChecked={HandleCheck}
                  key={task.id}
                  task={task}
                />
              ))
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
