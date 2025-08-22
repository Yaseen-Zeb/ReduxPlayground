import Posts from "../features/posts/components/Posts";
import Comments from "../features/comments/components/comments";
import Users from "../features/users/components/users";
import Todos from "../features/todos/components/todos";


import { createBrowserRouter } from "react-router";
import { paths } from "@/utils/constants";
import RootLayout from "@/components/layouts/root-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: paths.posts,
                element: <Posts />,
            },
            {
                path: paths.comments,
                element: <Comments />,
            },
            {
                path: paths.users,
                element: <Users />,
            },
            {
                path: paths.todos,
                element: <Todos />,
            }
        ]
    }
]);
