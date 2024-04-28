import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Checkbox,
  Dropdown,
  Icon,
  Modal
} from "semantic-ui-react";
import { message } from "antd";
import TermsAndCOnditionals from "../auxiliar/Terms";

const options = [
  { text: "FPS", value: "1" },
  { text: "RPG", value: "2" },
  { text: "MOBA", value: "3" },
  { text: "MMO", value: "4" },
  { text: "Luta", value: "5" },
  { text: "Corrida", value: "6" },
  { text: "Casual", value: "7" },
  { text: "Futebol", value: "8" }
];

function Register() {
  //states do register
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [passReg, setPassReg] = useState("");
  let [passwordType, setPasswordType] = useState(false);
  let [checkTerm, setCheckTerm] = useState(false);
  let [modalTerm, setModalTerm] = useState(false);
  let [gameCat, setGameCat] = useState([]);

  const handleOnChangeCheckTerm = () => {
    setCheckTerm(!checkTerm);
  };

  const navigateToLogin = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const openModal = () => {
    setModalTerm(true);
  };

  const closeModal = () => {
    setModalTerm(false);
  };

  function testeRegister() {
    messageApi
      .open({
        type: "loading",
        content: "Verificando Registro",
        duration: 1.5
      })

      .then(() =>
        (firstName !== "" ||
          passReg !== "" ||
          userName !== "" ||
          userEmail !== "" ||
          passReg !== "") &&
        checkTerm === true
          ? message.success("Registro de conta OK", 1.0) && navigateToLogin("/")
          : message.error("Favor preencher todos os campos")
      );
    //.then(() => message.success("Registro de conta OK", 1.0))
  }

  function reset() {
    setUserName("");
    setCheckTerm();
    setFirstName("");
    setGameCat([]);
    setLastName("");
    setPassReg("");
    setUserEmail("");
  }
  const navLog = () => {
    navigateToLogin("/");
  };

  return (
    <div style={{ padding: "1em" }}>
      <h3 style={{ color: "teal" }}>Usuário novo? Junte-se a nós</h3>
      <br />
      <Form>
        <Form.Input
          type="text"
          label="Digite seu primeiro nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></Form.Input>
        <Form.Input
          type="text"
          label="Digite seu ultimo nome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></Form.Input>
        <Form.Input
          type="text"
          label="Digite seu nome de usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></Form.Input>
        <Form.Input
          type="email"
          label="Digite seu email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        ></Form.Input>
        <Form.Input
          type={passwordType ? "text" : "password"}
          label="Digite uma senha"
          value={passReg}
          onChange={(e) => setPassReg(e.target.value)}
          icon={
            <Icon
              name={passwordType ? "eye slash" : "eye"}
              circular
              link
              onClick={() => setPasswordType(!passwordType)}
            />
          }
        ></Form.Input>

        <Form.Field>
          <Checkbox
            label={""}
            value={checkTerm}
            onChange={handleOnChangeCheckTerm}
          />
          Eu aceito os{" "}
          <span
            onClick={openModal}
            style={{ cursor: "pointer", color: "teal" }}
          >
            Termos e Condições
          </span>
          <Modal open={modalTerm} onClose={closeModal}>
            <Modal.Header>Termos e Condições</Modal.Header>
            <Modal.Content scrolling>
              <TermsAndCOnditionals />
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={closeModal}>Fechar</Button>
            </Modal.Actions>
          </Modal>
        </Form.Field>
        <Dropdown
          placeholder="Selecione as categorias de games que mais lhe atraem"
          fluid
          multiple
          selection
          options={options}
          value={gameCat}
          onChange={(e, { value }) => setGameCat(value)}
        />
        <br />
        {contextHolder}
        <Button color="teal" compact onClick={testeRegister}>
          Enviar
        </Button>
        <Button compact type="reset" onClick={reset}>
          Limpar
        </Button>
        <Button
          onClick={navLog}
          compact
          basic
          color="teal"
          style={{ padding: 5, float: "right" }}
        >
          Logar agora
        </Button>
      </Form>
    </div>
  );
}
export default Register;
