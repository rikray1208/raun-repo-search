import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Navigation: FC = () => {
    return (
        <ul className='w-full h-16 bg-purple-500 flex text-xl font-bold text-white cursor-pointer px-16'>
            <li className='py-4'> <Link to='/'> RepoSearch </Link></li>
            <li className='ml-auto hover:bg-purple-600 py-4 px-4'><Link to='/search'>Search</Link></li>
            <li className='hover:bg-purple-600 py-4 px-4'><Link to='/liked'>Liked Repo</Link></li>
            <li className='hover:bg-purple-600 py-4 px-4'>Liked Profiles</li>
        </ul>
    );
};

export default Navigation;