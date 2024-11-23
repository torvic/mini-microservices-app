import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import { Post } from './interfaces'
import styles from './PostList.module.css'

interface Props {
  posts?: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      <div className={styles.root__list}>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
							<CommentList postId={post.id} />
							<CommentCreate postId={post.id} onSuccess={() => {}} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default PostList
