import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/flavioxe.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <head>
                        <div className={styles.authorAndTime}>
                            <strong>Juliana Goia</strong>
                            <h5>teste</h5>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h hora atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </head>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                   <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>

        </div>
    )
}