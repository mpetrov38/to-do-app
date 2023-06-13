import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export function useTasks(todos){
  let [tasks,setTasks] = useState([]);

  function calculateTodosLength(taskType,todos){
    return todos.filter(todo => todo.taskType === taskType).length;
  }

  useEffect(()=>{
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        let taskType = doc.data().taskType;
        return {
          id: doc.id,
          name: taskType,
          numOfTodos: calculateTodosLength(taskType, todos)
        };
      });
      setTasks(data);
    });
    return () => unsub();
  },[]);

  return tasks;
}

export function useTodos() {
  let [todos, setTodos] = useState([]);
  const q = query(collection(db, "todos"));

  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setTodos(data);
      })
      return () => unsub();
    },[]);

  return todos;
}
