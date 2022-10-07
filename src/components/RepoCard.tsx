import React, {FC, useState} from 'react';
import {RepoResponse} from "../models/gitHubModels";
import {useActions, useAppSelector} from "../hooks/reduxHooks";
import {RootState} from "../redux/store";
interface CardProps {
    repo: RepoResponse
}

const RepoCard: FC<CardProps> = ({repo}) => {
    const {addRepo, removeRepo} = useActions()
    const {likedRepos} = useAppSelector((state: RootState) => state.github);
    const [isLiked, setIsLiked] = useState<boolean>(likedRepos.includes(repo.html_url));


    function add(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addRepo(repo.html_url)
        setIsLiked(true);
    }

    function remove(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        removeRepo(repo.html_url);
        setIsLiked(false)
    }

    return (
        <a href={repo.html_url} target="_blank">
            <div className='w-[600px] flex flex-col justify-center bg-white border border-gray-100 shadow-xl shadow-gray-200 p-4 my-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100'>
                <h1 className='text-xl font-bold'>{repo.name}</h1>
                <div className='flex gap-x-2'>
                    <p className='text-base font-medium text-gray-600'>Forks: <span className='font-bold'>{repo.forks}</span></p>
                    <p className='text-base font-medium  text-gray-600'>Stars: <span className='font-bold'>{repo.watchers}</span></p>
                </div>

                {isLiked ?
                    <button onClick={remove} className='bg-red-500 w-fit mt-2 p-2 rounded-lg text-white font-bold text-sm outline-none active:scale-95 transition-all'>REMOVE</button>
                    :
                    <button onClick={add} className='bg-green-500 w-fit mt-2 p-2 rounded-lg text-white font-bold text-sm outline-none active:scale-95 transition-all'>ADD</button>
                }
            </div>
        </a>
    );
};

export default RepoCard;