import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import { Container, PostForm } from '../components'

const EditPost = () => {
    const [posts,setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug)
            .then((post:any) => post && setPosts(post))
            .catch((error) => console.log(error))
        } else {
            navigate('/')
        }
    }, [slug,navigate])
    
    if (posts) {
        return (
            <div className='py-8'>
                <Container>
                    <PostForm post={posts}/>
                </Container>
            </div>
        )
    }
}

export default EditPost