import * as yup from "yup";

export const createTodoValidator = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().default(""),
  priority: yup.string().default("medium"),
  status: yup.string().default("IN_PROGRESS"),
  createdAt: yup.string().default(new Date().toISOString()),
});
