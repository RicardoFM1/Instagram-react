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

const Home = () => {
  const [salvo, setSalvo] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      usuario: "liam_legal",
      likes: 100,
      comments: 265,
      reposts: 5,
      liked: false,
      image:
        "https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shares: 765,
      description: "Um cara bem legal fazendo algo legal",
    },
    {
      id: 2,
      usuario: "liam_nao_legal",
      likes: 1500,
      comments: 2000,
      reposts: 56,
      liked: false,
      image:
        "https://images.unsplash.com/photo-1626469028023-896eda77d814?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shares: 200,
      description: "Um cara não tão legal fazendo algo não tão legal",
    },
  ]);

  const handleCurtido = (id) => {
    setPosts((estadoAnterior) =>
      estadoAnterior.map((post) => {
        if (post.id !== id) return post;

        const jaCurtido = post.liked;

        return {
          ...post,
          likes: jaCurtido ? post.likes - 1 : post.likes + 1,
          liked: !jaCurtido,
        };
      }),
    );
  };

  return (
    <>
      <Stories />
      <main>
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
                  <p className="mb-0 fw-semibold">{post.usuario}</p>
                </section>
                <Button className="border-0 bg-transparent text-black fw-bold">
                  ...
                </Button>
              </Stack>
              <img
                className={style.imgPost}
                src={post.image}
                alt="Imagem post"
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
                    <span className="fw-bold">{post.usuario}</span>{" "}
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
        <BottomNavBar />
      </main>
    </>
  );
};

export default Home;
