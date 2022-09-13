// user context
import createDataContext from "../createDataContext";

// Initial State
const sampleInitialState = {
	loading: false,
};

// Reducer
const sampleReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_LOADING":
			return { ...state, loading: payload };

		default:
			return state;
	}
};

// Actions
const sampleLoadAction = (dispatch) => {
	return () => {
		wait(true, dispatch);

		console.log("sample action log");

		wait(false, dispatch);
	};
};

// Helpers
const wait = (l, d) => d({ type: "SET_LOADING", payload: l });

// Export
const { Context: SampleContext, Provider: SampleProvider } = createDataContext(
	sampleReducer,
	{
		sampleLoadAction,
	},
	sampleInitialState
);

export { SampleProvider, SampleContext };
