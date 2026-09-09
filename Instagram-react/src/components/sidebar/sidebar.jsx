
import { Button, Navbar, Stack } from "react-bootstrap"
import style from './sidebar.module.css'
import { FaInstagram } from "react-icons/fa"
import { BiHeart, BiHome, BiPlus, BiSearch } from "react-icons/bi"
import { CgPlayButtonR } from "react-icons/cg"
import { BsSend } from "react-icons/bs"

const Sidebar = () => {
    return (
        <aside className={style.aside}>
            <nav className={style.navbar}>
                <div>
                    <FaInstagram size={32} />
                </div>

                <Stack className="p-0" gap={5}>

                    <button aria-label="Redirecionar para página inicial" className="bg-transparent border-0 p-0 w-auto"><BiHome color="black" size={32} /></button>
                    <button aria-label="Pesquisar usuários" className="bg-transparent border-0 p-0"><BiSearch color="black" size={32} /></button>
                    <button aria-label="Assistir reels" className="bg-transparent border-0 p-0"><CgPlayButtonR color="black" size={32} /></button>
                    <button aria-label="Visualizar conversas/mensagens" className="bg-transparent border-0 p-0"><BsSend color="black" size={32} /></button>
                    <button aria-label="Ir para a página de perfil do usuário" className="bg-transparent border-0 p-0">
                        <img
                            className={style.fotoPerfilStory}
                            alt="Foto de perfil"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        /></button>
                    <button aria-label="Publicar stories" className="p-0 bg-transparent border-0 p-0">
                        <BiPlus color="black" size={32} />
                    </button>
                    <button aria-label="Mensagens diretas" className="bg-transparent border-0 p-0">
                        <BiHeart color="black" size={32} />
                    </button>
                </Stack>
            </nav>
        </aside>
    )
}

export default Sidebar
