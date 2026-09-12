import React from 'react'
import appwrite from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id,title,featuredImage}:any) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <div>
                    <img src={String(appwrite.getFilePreview(featuredImage))} className='rounded-xl' alt="" />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard