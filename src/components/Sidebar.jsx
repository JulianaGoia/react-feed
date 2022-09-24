import { PencilLine } from 'phosphor-react';
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" className={style.cover} />

            <div className={style.profile}>
                <img src="https://github.com/JulianaGoia.png" className={style.avatar} />
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}