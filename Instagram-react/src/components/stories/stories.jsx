import { ListGroup, Stack } from "react-bootstrap";
import style from "./stories.module.css";

const Stories = () => {
  return (
    <>
      <ListGroup className={style.listagemEmGrupo} horizontal>
        <ListGroup.Item>
          <Stack>
            <img
              className={style.fotoPerfilStory}
              alt="Foto de perfil do stories"
              aria-label="Foto de perfil do stories"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p><span className={style.font}>Seu story</span></p>
          </Stack>
        </ListGroup.Item>
        <ListGroup.Item>
          <Stack>
            <img
              className={style.fotoPerfilStory}
              alt="Foto de perfil do stories"
              aria-label="Foto de perfil do stories"
              src="https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p className="w-75 d-inline-block text-truncate"><span className={style.font}>malandro_do_grauuuuuuuuuu</span></p>
          </Stack>
        </ListGroup.Item>
        <ListGroup.Item>
          <Stack>
            <img
              className={style.fotoPerfilStory}
              alt="Foto de perfil do stories"
              aria-label="Foto de perfil do stories"
              src="https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p><span className={style.font}>066_eduardo</span></p>
          </Stack>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Stories;
