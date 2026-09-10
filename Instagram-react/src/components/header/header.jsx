import { Button, Navbar, Stack } from "react-bootstrap";
import style from "./header.module.css";
import { BiHeart, BiPlus } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar className="p-3 d-flex justify-content-between d-md-none">
      <Navbar.Brand className={style.navbarBrand}>Instagram</Navbar.Brand>
      <Stack direction="horizontal" gap={1}>
        <Button aria-label="Publicar stories" className="p-0 bg-transparent border-0">
          <BiPlus color="black" size={28} />
        </Button>
        <Button aria-label="Mensagens diretas" className="bg-transparent border-0 ">
          <BiHeart color="black" size={28} />
        </Button>
      </Stack>
    </Navbar>
  );
};

export default Header;
