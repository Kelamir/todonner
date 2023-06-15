import { create } from "zustand";

interface stateBox {
  tasksCount: number;
  increaseCount: (by: number) => void;
  resetCount: (by: 0) => void;

  tasksList: string[];
  addTask: (task: string) => void;
}

export const useStateBox = create<stateBox>()((set) => ({
  tasksCount: 0,
  increaseCount: () => set((state) => ({ tasksCount: state.tasksCount + 1 })),
  resetCount: () => set({ tasksCount: 0 }),

  tasksList: [],
  addTask: (task) =>
    set((state) => ({ tasksList: [...state.tasksList, task] })),
}));
