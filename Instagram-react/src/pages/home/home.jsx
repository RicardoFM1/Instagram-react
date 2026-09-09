import { Button, Card, ListGroup, Stack } from "react-bootstrap";
import Stories from "../../components/stories/stories";
import style from "./home.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { BiBookmark, BiRepost } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import BottomNavBar from "../../components/bottomNavBar/bottomNavBar";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  const [salvo, setSalvo] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "liam_legal",
      likes: 100,
      comments: 265,
      reposts: 5,
      liked: false,
      profile:
        "https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shares: 765,
      description: "Um cara bem legal fazendo algo legal",
    },
    {
      id: 2,
      user: "liam_nao_legal",
      likes: 1500,
      comments: 2000,
      reposts: 56,
      liked: false,
      profile:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shares: 200,
      description: "Um cara não tão legal fazendo algo não tão legal",
    },
  ]);

  const [stories, setStories] = useState([
    {
      id: 1,
      user: 'Seu Story', // Nome vindo do backend normal, seria o próprio usuário logado, que com api verificaria o id com o id logado para formatar o texto
      // para 'Seu story'
      videos: [
        // Colocar videos aqui em base64 ou um link.
      ],
      profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      // Foto de perfil dos stories
    },
    {
      id: 2,
      user: 'guizao_ds',
      videos: [

      ],
      profile: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      user: 'duduardo_65',

      videos: [

      ],
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      user: '066_eduardo',
      videos: [

      ],
      profile: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      user: '066_eduardo',
      videos: [

      ],
      profile: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

  ])

  const handleCurtido = (id) => {
    setPosts((estadoAnterior) =>
      estadoAnterior.map((post) => {
        if (post.id !== id) return post;

        const jaCurtido = post.liked;

        return {
          ...post,
          likes: jaCurtido ? post.likes - 1 : post.likes + 1,
          liked: !jaCurtido
        };
      }),
    );
  };

  return (
    <>
      <main className="d-md-flex">
        <Sidebar />

        <div className={style.conteudoPrincipal}>

          <Stories stories={stories} setStories={setStories} />
          <Stack className={style.listagemPosts}>
            {posts.map((post) => (
              <Stack className={style.divPost}>
                <Stack
                  direction="horizontal"
                  className={style.stackInfoPost}
                  gap={2}
                >
                  <section className="border-0 p-3 d-flex gap-2">
                    <img
                      className={style.fotoPerfilPost}
                      src="https://plus.unsplash.com/premium_photo-1695575578331-b09400a8a9bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Foto de perfil do post"
                    />
                    <p className="mb-0 fw-semibold">{post.user}</p>
                  </section>
                  <Button className="border-0 bg-transparent text-black fw-bold">
                    ...
                  </Button>
                </Stack>
                <img
                  className={style.imgPost}
                  src={post.profile}
                  alt="profilem post"
                />
                <section>
                  <article className="d-flex p-3 pb-0 justify-content-between ">
                    <Stack direction="horizontal" gap={3}>
                      <p>
                        {post.liked ? (
                          <FaHeart
                            color="red"
                            onClick={() => handleCurtido(post.id)}
                            size={20}
                          />
                        ) : (
                          <FaRegHeart
                            onClick={() => handleCurtido(post.id)}
                            size={20}
                            className="me-1"
                          />
                        )}
                        <span className="fw-semibold">{post.likes}</span>
                      </p>
                      <p>
                        <FaRegComment size={20} className="me-1" />
                        <span className="fw-semibold">{post.comments}</span>
                      </p>
                      <p>
                        <BiRepost size={24} className="me-1" />
                        <span className="fw-semibold">{post.reposts}</span>
                      </p>
                      <p>
                        <BsSend size={20} className="me-1" />
                        <span className="fw-semibold">{post.shares}</span>
                      </p>
                    </Stack>
                    {salvo ? (
                      <FaBookmark onClick={() => setSalvo(!salvo)} size={20} />
                    ) : (
                      <BiBookmark onClick={() => setSalvo(!salvo)} size={20} />
                    )}
                  </article>
                </section>
                <section>
                  <article>
                    <p className="ps-3 mt-0 mb-0">
                      Curtido por <span className="fw-bold">liam_legal</span> e{" "}
                      <span className="fw-bold">outras 265 pessoas</span>
                    </p>
                    <p className="ps-3 mt-0">
                      <span className="fw-bold">{post.user}</span>{" "}
                      {post.description}
                    </p>
                    <p className="ps-3 text-muted">
                      há 3 horas ·{" "}
                      <span className="fw-semibold">Ver tradução</span>
                    </p>
                  </article>
                </section>
              </Stack>
            ))}
          </Stack>
        </div>

        <BottomNavBar />
      </main>
    </>
  );
};

export default Home;
