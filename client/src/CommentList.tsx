import { Comment } from './interfaces'
import styles from './CommentList.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  postId?: string;
}

const CommentList = ({ postId }: Props) => {
	const [comments, setComments] = useState<Comment[]>([]);


	const fetchComments = async () => {
		const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
		setComments(res.data)
	}

	useEffect(() => {
		fetchComments();
	}, [])

  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Comments:</h3>
      <ul className={styles.root__list}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.id} className={styles.root__item}>
              {comment.content}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CommentList
