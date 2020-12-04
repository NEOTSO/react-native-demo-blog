import createContext from "./createContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT_POSTS":
            console.log("iiii");
            console.log(action.payload);
            return [...action.payload];
        case "ADD_POST":
            return [...state, { ...action.payload, id: Math.random() }];
        case "EDIT_POST":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, ...action.payload };
                }
                return item;
            });
        case "DELETE_POST":
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

const initPosts = (dispatch) => {
    return async () => {
        try {
            const { data } = await jsonServer.get("/posts");
            dispatch({ type: "INIT_POSTS", payload: data });
        } catch (err) {
            console.log(err);
        }
    };
};

const addPost = (dispatch) => {
    return async (post, cb) => {
        try {
            const { data } = await jsonServer.post("/posts", post);
            // dispatch({ type: "ADD_POST", payload: post });
            cb();
        } catch (err) {
            console.log("####add");
            console.log(err);
        }
    };
};

const editPost = (dispatch) => {
    return async (post, cb) => {
        try {
            const { data } = await jsonServer.patch(`/posts/${post.id}`, post);
            console.log("###patch");
            console.log(data);
            // dispatch({ type: "EDIT_POST", payload: post });
            cb();
        } catch (err) {
            console.log(err);
        }
    };
};

const deletePost = (dispatch) => {
    return async (id) => {
        try {
            const { data } = await jsonServer.delete(`/posts/${post.id}`);
            console.log("###delete");
            console.log(data);
            dispatch({ type: "DELETE_POST", payload: id });
        } catch (err) {
            console.log(err);
        }
    };
};

export const { Context, Provider } = createContext(reducer, { initPosts, addPost, editPost, deletePost }, []);
