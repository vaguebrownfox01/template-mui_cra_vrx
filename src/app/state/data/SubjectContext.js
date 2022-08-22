// user context
import createDataContext from "../createDataContext";

// Initial State
const subjectInitialState = {
	loading: false,
};

// Reducer
const subjectReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_LOADING":
			return { ...state, loading: payload };

		default:
			return state;
	}
};

// Actions
const subjectLoadAction = (dispatch) => {
	const wait = (a) => dispatch({ type: "SET_LOADING", payload: a });
	return () => {
		wait(true);

		console.log("user action log");

		wait(false);
	};
};

// Helpers

// Export
const { Context: SubjectContext, Provider: SubjectProvider } =
	createDataContext(
		subjectReducer,
		{
			subjectLoadAction,
		},
		subjectInitialState
	);

export { SubjectProvider, SubjectContext };
