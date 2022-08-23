import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";
import { ITask } from "./interface/Task";

interface TaskProps {
  task: ITask;
  onChecked: (task: ITask) => void;
  onDelete: (id: string) => void;
}

export const Task = ({ task, onChecked, onDelete }: TaskProps) => {
  const [t, setT] = useState(false);

  const handleCheckChange = () => {
    onChecked(task);
  };

  const handleTrashClick = () => {
    onDelete(task.id);
  };

  return (
    <li className={styles.taskCard}>
      <label htmlFor="checkbox" className={task.isCompleted ? styles.decoratedLabel : styles.regularLabel}>
        <Checkbox
          id="checkbox"
          className={styles.checkbox}
          checked={task.isCompleted}
          onCheckedChange={handleCheckChange}
        >
          <CheckboxIndicator className={styles.checkboxIndicator}>
            <Check className="styles.checkIcon" />
          </CheckboxIndicator>
        </Checkbox>
        {task.descripition}
      </label>
      <Trash
        className={styles.trash}
        size="1.5rem"
        onClick={handleTrashClick}
      />
    </li>
  );
};
