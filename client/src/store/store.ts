import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState, createUserSlice } from "./UserSlice";
import { TodoState, createTodoSlice } from './TodoSlice';

export const useGlobalState = create<UserState & TodoState>()(
    devtools(
        persist(
            () => ({
                ...createUserSlice(),
                ...createTodoSlice(),
            }),
            { name: "app-state" }
        )
    )
);
