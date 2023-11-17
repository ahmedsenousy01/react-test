import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState, createUserSlice } from "./UserSlice";
import { TodoState, createTodoSlice } from './TodoSlice';
import { AppState, createAppSlice } from './AppSlice';

export const useGlobalState = create<UserState & TodoState & AppState>()(
    devtools(
        persist(
            () => ({
                ...createUserSlice(),
                ...createTodoSlice(),
                ...createAppSlice(),
            }),
            { name: "app-state" }
        )
    )
);
