import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface stateBox {
  tasksCount: number;
  increaseCount: (by: number) => void;
  resetCount: (by: 0) => void;

  tasksList: string[];
  addTask: (task: string) => void;
  deleteTask: (taskId: number) => void;
}

export const useStateBox = create<stateBox>()(
  persist(
    devtools((set) => ({
      tasksCount: 0,
      increaseCount: () =>
        set((state) => ({ tasksCount: state.tasksCount + 1 })),
      resetCount: () => set({ tasksCount: 0 }),

      tasksList: [],
      addTask: (task) =>
        set((state) => ({ tasksList: [...state.tasksList, task] })),

      deleteTask: (taskId) =>
        set((state) => ({
          tasksList: state.tasksList.filter((_, index) => index !== taskId),
        })),
    })),
    {
      name: "Todonner stateBox",
      getStorage: () => localStorage,
    }
  )
);
