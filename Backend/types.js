const zod = require("zod");
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean().optional().default(false)
}).required();

const updateTodo = zod.object({
    id: zod.string()
}).required();

module.exports = {createTodo, updateTodo};