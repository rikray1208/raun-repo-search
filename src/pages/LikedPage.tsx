import React, {FC} from 'react';
import {useActions, useAppSelector} from "../hooks/reduxHooks";
import {RootState} from "../redux/store";
import close from '../assets/close.svg'

const LikedPage: FC = () => {
    const {likedRepos} = useAppSelector((state: RootState) => state.github);
    const {removeRepo} = useActions();
    console.log(likedRepos)


    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            {likedRepos?.length > 0 &&
                likedRepos.map(el =>
                    <div className='w-[600px] flex justify-between items-center bg-white border border-gray-100 shadow-xl shadow-gray-200 p-4 my-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100'>
                        <a href={el} key={el} target='_blank'>{el}</a>
                        <img onClick={() => removeRepo(el)} width={16} src={close} alt='close'/>
                    </div>
                )
            }
        </div>
    );
};

export default LikedPage;