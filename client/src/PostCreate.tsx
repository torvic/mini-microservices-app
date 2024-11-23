import { SyntheticEvent, useState } from 'react';
import styles from './PostCreate.module.css';
import axios from 'axios'
import { Post } from './interfaces';

interface Props {
	onSuccess: (post: Post) => void;
}

const PostCreate = ({ onSuccess }: Props) => {
	const [title, setTitle] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}

	const handleSubmit = async (e:SyntheticEvent ) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:4000/posts', {
				title
			})
			setTitle('');
			onSuccess(res.data);
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <div className={styles.root__group}>
        <label htmlFor='title'>Title: </label>
        <input id='title' type='text' className={styles.root__input} onChange={handleChange} value={title} required />
      </div>
      <div className={styles.root__actions}>
        <button type='submit' className={styles.root__button}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostCreate
