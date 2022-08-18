import { FaLinkedin } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

import { ReactComponent as Inicio } from "../../assets/icons/inicio.svg";
import { ReactComponent as MinhaRede } from "../../assets/icons/minha-rede.svg";
import { ReactComponent as Vagas } from "../../assets/icons/vagas.svg";
import { ReactComponent as Mensagens } from "../../assets/icons/mensagens.svg";
import { ReactComponent as Notificacoes } from "../../assets/icons/notificacoes.svg";
import { ReactComponent as Solucoes } from "../../assets/icons/solucoes.svg";

import { Container } from "./styles";

const Navbar = () => {
  return (
    <Container>
      <div>
        <FaLinkedin color="#FFFFFF" size={"34px"} />
        <div className="search">
          <MdSearch color="#FFFFFF" size={"24px"} />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Inicio />
            <p>Início</p>
          </li>
          <li>
            <MinhaRede />
            <p>Minha Rede</p>
          </li>
          <li>
            <Vagas />
            <p>Vagas</p>
          </li>
          <li>
            <Mensagens />
            <p>Mensagens</p>
          </li>
          <li>
            <Notificacoes />
            <p>Notificações</p>
          </li>
          <li>
            <Solucoes />
            <p>Soluções</p>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
