import { configureStore } from "@reduxjs/toolkit"
import { CommentsReducer } from "./comentsSlice";
import { PostsReducer } from "./postsSlice";
import { TodosReducer } from "./todosSlice";
import { UsersReducer } from "./usersSlice";

export default configureStore({
    reducer: {
        users: UsersReducer,
        posts: PostsReducer,
        comments: CommentsReducer,
        todos: TodosReducer
    }
})