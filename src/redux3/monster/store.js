import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../count/countSlice";
import monsterSlice from "./monsterSlice";

export default configureStore({
    reducer: {
        count: countSlice,
        monster: monsterSlice
    }
})