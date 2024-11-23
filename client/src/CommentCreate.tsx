import React, { SyntheticEvent, useState } from 'react'
import styles from './CommentCreate.module.css'
import axios from 'axios';

interface Props {
	postId?: string;
	onSuccess: () => void;
}

const CommentCreate = ({ postId, onSuccess }: Props) => {
	const [content, setContent] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value)
	}

	const handleSubmit = async (e: SyntheticEvent ) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
				content
			})
			setContent('');
			onSuccess();
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<form className={styles.root} onSubmit={handleSubmit}>
      <div className={styles.root__group}>
        <label htmlFor='content'>New comment: </label>
        <input id='content' type='text' className={styles.root__input} onChange={handleChange} value={content} required />
      </div>
      <div className={styles.root__actions}>
        <button type='submit' className={styles.root__button}>
          Submit
        </button>
      </div>
		</form>
	)
}

export default CommentCreate