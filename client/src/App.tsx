import PostCreate from './PostCreate'
import styles from './App.module.css'
import PostList from './PostList'
import { useEffect, useState } from 'react';
import { Post } from './interfaces';
import axios from 'axios';

function App() {
	const [posts, setPosts] = useState<Post[]>([]);
	console.log(Object.values(posts));


	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4000/posts');
		setPosts(Object.values(res?.data))
	}

	const handlePostCreatedSuccess = (post: Post) => {
		setPosts((prev) => [...prev, post])
	}

	useEffect(() => {
		fetchPosts();
	}, [])

  return (
    <div className={styles.root}>
			<PostCreate onSuccess={handlePostCreatedSuccess} />
			<PostList posts={posts} />
    </div>
  )
}

export default App
