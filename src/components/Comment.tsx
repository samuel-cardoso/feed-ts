import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setlikeCount] = useState(0);

    function handleLikeComment() {
        setlikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/samuel-cardoso.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>        
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Cardoso da Silva </strong>
                            <time title="26 de Novembro às 21:30h" dateTime='2024-11-26 21:31:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} title="Aplaudir">
                        <ThumbsUp /> 
                        Apladir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
         </div>
    )
}
