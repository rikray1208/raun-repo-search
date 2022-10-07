import React, {FC, useEffect, useState} from 'react';
import {useLazyFetchRepoQuery, useSearchUserQuery} from "../redux/githubApi";
import Loader from "../components/UI/loader/Loader";
import {useDebounce} from "../hooks/useDebounce";
import RepoCard from "../components/RepoCard";

const SearchPage: FC = () => {
    const [name, setName] = useState<string>('');
    const [dropDown, setDropDown] = useState<boolean>(false);
    const [dropDownRepos, setDropDownRepos] = useState<boolean>(false);
    const delayName = useDebounce(name, 400);
    const { isLoading, isError, data } = useSearchUserQuery(delayName, {skip: delayName.length < 1, refetchOnFocus: true});
    const [fetchRepos, {isLoading: repoLoading, data: repos}] = useLazyFetchRepoQuery()

    useEffect(() => {
        setDropDown(delayName.length > 0 )
        setDropDownRepos(false)
    }, [delayName]);

    function click(username: string) {
        fetchRepos(username)
        setDropDown(false)
        setDropDownRepos(true)
    }

    return (
        <>
            <div className='flex flex-col items-center  mt-20'>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-[600px] h-16 px-4 shadow-xl shadow-gray-200 rounded-lg outline-none'
                    type='text'
                    placeholder='Введите имя аккаунта...'
                />
                {isError && <h1> ошибка </h1>}
                {isLoading && <Loader/>}
                {dropDown &&
                    <ul className='block w-[600px] h-[270px] overflow-y-scroll flex flex-col gap-y-4 mt-6 shadow-gray-400 shadow-2xl rounded-lg'>
                        {data?.map(el =>
                            <li
                                className='flex items-center gap-x-4 py-2 px-4 hover:bg-gray-200 font-bold text-base cursor-pointer'
                                key={el.id}
                                onClick={() => click(el.login)}
                            >
                                <img className='w-6 h-6 rounded-[50px]' alt='avatar' src={el.avatar_url}/>
                                {el.login}
                            </li>
                        )}
                    </ul>
                }

                {repoLoading && <Loader/>}
                {dropDownRepos &&
                    <>
                        {repos?.length && repos.map( el =>
                            <RepoCard key={el.id} repo={el}/>
                        )}
                    </>
                }
            </div>

        </>
    );
};

export default SearchPage;