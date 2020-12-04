import createContext from "./createContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, { title: "new post", id: Math.random() }];
        case "DELETE_POST":
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

const addPost = (dispatch) => {
    return () => dispatch({ type: "ADD_POST" });
};

const deletePost = (dispatch) => {
    return (id) => dispatch({ type: "DELETE_POST", payload: id });
};

export const { Context, Provider } = createContext(reducer, { addPost, deletePost }, []);
