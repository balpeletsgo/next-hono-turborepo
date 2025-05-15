import { z } from "zod";

export const todoSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(1, "Title is required"),
	completed: z.boolean().default(false),
	createdAt: z.date().default(() => new Date()),
});

export type Todo = z.infer<typeof todoSchema>;

export const todosSchema = z.array(todoSchema);
export type Todos = z.infer<typeof todosSchema>;
