import { createSlice } from "@reduxjs/toolkit"


const dashbordItemslice = createSlice({
	name: "dashbordUserItem",
	initialState: {
		value: [],
        errors:[]
	},
	reducers: {
		setSearchResult: (state, action) => {
			state.value = action.payload.data
		},

        setResultError: (state, action) =>{
            state.errors.push(action.payload)
        }
	}
})


export const { setSearchResult, setResultError } = dashbordItemslice.actions
export default dashbordItemslice.reducer