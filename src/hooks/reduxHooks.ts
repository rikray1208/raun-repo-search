import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {githubActions} from "../redux/githubSlice";
import {bindActionCreators} from "@reduxjs/toolkit";


const actions = {
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;