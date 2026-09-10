import { Button, ListGroup, Stack } from "react-bootstrap";
import style from "./stories.module.css";

const Stories = ({ stories, setStories }) => {
  return (
    <>
      <ListGroup className={style.listagemEmGrupo} horizontal>
        {stories.map(stories => (
          <ListGroup.Item>
            <Stack>
              <Button className="bg-transparent border-0">

                <img
                  key={stories.id}
                  className={style.fotoPerfilStory}
                  alt="Foto de perfil do stories"
                  aria-label="Foto de perfil do stories"
                  src={stories.profile}
                />
                <p className="text-black"><span className={style.font}>{stories.user}</span></p>
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}

      </ListGroup>
    </>
  );
};

export default Stories;
