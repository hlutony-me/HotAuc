import { createSlice } from "@reduxjs/toolkit"


const itemSlice = createSlice({
	name: "item",
	initialState: {
		value: []
	},
	reducers: {
		setSearchResult: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { setSearchResult } = itemSlice.actions
export default itemSlice.reducer
