import { connect } from 'react-redux'
import { getPosts } from './store/posts'
import Post from './components/Post'
import { useEffect } from 'react'

function App({posts, getPosts}) {

    useEffect(() => {
            getPosts()
        }, []
    )

    console.log(posts)
    return (
        <>
            {
                posts.length && posts.map(item => <Post key={item.id} title={item.title} body={item.body}/>)
            }
        </>
    )
}

export default connect(
    ({posts}) => ({posts}),
    {
        getPosts: getPosts
    }
)(App)
