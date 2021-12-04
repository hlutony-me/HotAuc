import { createSlice } from "@reduxjs/toolkit"


const dashbordItemslice = createSlice({
	name: "dashbordUserItem",
	initialState: {
		value: []
	},
	reducers: {
		setSearchResult: (state, action) => {
			state.value = action.payload
		}
	}
})


export const { setSearchResult } = dashbordItemslice.actions
export default dashbordItemslice.reducer