import { ClipboardText } from "phosphor-react";
import styles from "./Empty.module.css";

export const Empty = () => {
  return (

      <li className={styles.emptyContent}>
        <ClipboardText className={styles.clipboard} size="3.5rem" />
        <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </li>

  );
};
