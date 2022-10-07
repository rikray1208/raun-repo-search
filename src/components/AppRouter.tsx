import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import LikedPage from "../pages/LikedPage";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/liked' element={<LikedPage/>}/>

            <Route path='*' element={<SearchPage/>}/>
        </Routes>
    );
};

export default AppRouter;