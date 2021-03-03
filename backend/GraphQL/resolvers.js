const { Todo } = require('../models')

module.exports = {
    Query: {
        todos: async () => await Todo.find().sort("-_id"),
        async getTodo(parent, arg, ctx, info) {
            try {
                await Todo.findById(arg.id)
                return doc

            } catch (error) {
                throw error
            }
        }
    },
    Mutation: {
        async addTodo(parent, arg, ctx, info) {
            try {
                return await Todo.create({ title: arg.title })
            } catch (error) {
                throw error
            }
        },
        async editTodo(parent, arg, ctx, info) {
            try {
                const { id, ...rest } = arg
                await Todo.updateOne({ _id: id }, { $set: rest })
                return Todo.findById(id)
            }
            catch (error) {
                throw error
            }

        },
        async deleteTodo(parent, arg, ctx, info) {
            try {
                await Todo.deleteOne({ _id: arg.id })
                return true

            } catch (error) {
                return false
            }
        }
    }
}