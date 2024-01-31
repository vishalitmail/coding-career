import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
    return (
        <div className=' text-white text-6xl bg-slate-600 p-4'>
            User: {id}
        </div>
    )
}

export default User
