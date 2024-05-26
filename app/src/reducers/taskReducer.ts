import { TaskState, TaskAction } from "./taskState";

const TaskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case "UPDATE_TASK":
            const updatedTask = action.payload;
            const updated = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });
            return {
                ...state,
                tasks: updated,
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default TaskReducer;
