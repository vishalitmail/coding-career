import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vishalitmail')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className=' text-center text-white text-3xl bg-gray-600 p-4 m-4'>
            Github Followers: {data.followers}
            <img className='  ' src={data.avatar_url} alt="Git picture" width={100} />
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vishalitmail')
    return response.json()
}
