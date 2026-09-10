import { Button, Navbar, Stack } from "react-bootstrap";
import { BiHome, BiPlay, BiSearch, BiSend } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { CgPlayButtonR } from "react-icons/cg";
import { BsSend } from "react-icons/bs";
import style from './bottomNavBar.module.css'
const BottomNavBar = () => {
  return (
    <Navbar className={style.navbar}>
      <Stack direction="horizontal" className={style.stackIcones}>
        <Button aria-label="Redirecionar para página inicial" className="bg-transparent border-0 p-0"><BiHome color="black" size={24} /></Button>
        <Button aria-label="Pesquisar usuários" className="bg-transparent border-0 p-0"><BiSearch  color="black" size={24} /></Button>
        <Button aria-label="Assistir reels" className="bg-transparent border-0 p-0"><CgPlayButtonR color="black" size={24} /></Button>
        <Button aria-label="Visualizar conversas/mensagens" className="bg-transparent border-0 p-0"><BsSend color="black" size={24} /></Button>
        <Button aria-label="Ir para a página de perfil do usuário" className="bg-transparent border-0 p-0">
          <img
            className={style.fotoPerfilStory}
            alt="Foto de perfil"
            aria-label="Foto de perfil"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /></Button>
      </Stack>
    </Navbar>
  );
};

export default BottomNavBar;