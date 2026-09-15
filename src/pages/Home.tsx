import { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

const Home = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
    service.getPosts().then((post:any) => {
        if (post) {
            setPosts(post)
        }
    })
    }, [])

    if (posts.length === 0) {
        return(
            <div>
                login to read post
            </div>
        )
    }
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((item:any) => (
                    <div key={item?.$id} className='p-2 w-1/2'>
                        <PostCard post={item}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
    )
}

export default Home