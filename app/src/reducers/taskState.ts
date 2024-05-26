export interface Task {
    id: number;
    title: string;
    description: string;
}

export interface TaskState {
    tasks: Task[];
}

export type TaskAction =
    | {
          type: "ADD_TASK";
          payload: Task;
      }
    | {
          type: "UPDATE_TASK";
          payload: Task;
      }
    | {
          type: "DELETE_TASK";
          payload: number;
      };
