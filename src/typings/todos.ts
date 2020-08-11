export type TodoPriority = "low" | "medium" | "high";

export type TodoStatus = "IN_PROGRESS" | "DONE";

export interface ICreateTodoDTO {
  title: string;
  description: string;
  priority: TodoPriority;
}

export interface ITodo extends ICreateTodoDTO {
  status: TodoStatus;
  createdAt: string;
}
