
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./features/count/countSlice";
import monsterSlice from "./features/monster/monsterSlice";

export default configureStore({
	reducer: {
		count: countSlice,
		monster: monsterSlice
	}

})

