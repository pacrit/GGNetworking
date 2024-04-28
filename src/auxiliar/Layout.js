import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Label,
  Header,
  Message,
  Segment,
  Icon,
  Divider
} from "semantic-ui-react";
import { message } from "antd";
import "./LayoutStyle.css";

const Layout = () => {
  let [login, setLogin] = useState("");
  let [pass, setPass] = useState("");
  let [passwordType, setPasswordType] = useState(false);
  let [user, setUser] = useState("");

  const navigate = useNavigate();

  const reg = () => {
    navigate("/register");
  };

  const loginGoogle = () => {
    console.log("Logando pelo Google");
  };
  const loginFace = () => {
    console.log("Logando pelo Facebook");
  };

  const [messageApi, contextHolder] = message.useMessage();

  function testeLogin() {
    //ainda não foi lnkado a api com o front, (provavelmente sera usado sql server ou mysql para dados)
    localStorage.setItem("userLogin", JSON.stringify(login));
    messageApi
      .open({
        type: "loading",
        content: "Verificando Login",
        duration: 1.5
      })
      .then(() =>
        login === "patrick" && pass === "123456"
          ? navigate("/feed/:userId")
          : login === "" && pass === ""
          ? message.error("Login/senha não preenchidos")
          : message.error("Login e senha não encontrado")
      );
  }

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ marginTop: "10em" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Logue na sua conta
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                labelPosition="left"
                fluid
                placeholder="Usuário"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              >
                <Label>
                  <Icon name="user" />
                </Label>
                <input />
              </Form.Input>

              <Form.Input
                labelPosition="left"
                fluid
                iconPosition="right"
                placeholder="Senha"
                type={passwordType ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              >
                <Label>
                  <Icon name="lock" />
                </Label>
                <input />
                <Icon
                  name={passwordType ? "eye" : "eye slash"}
                  link
                  onClick={() => setPasswordType(!passwordType)}
                />
              </Form.Input>
              {contextHolder}
              <Button color="teal" fluid size="large" onClick={testeLogin}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Novo por aqui?{" "}
            <span onClick={reg} style={{ cursor: "pointer", color: "teal" }}>
              Registre-se
            </span>
          </Message>
        </Grid.Column>
      </Grid>
      <Divider horizontal>Ou</Divider>
      <Grid verticalAlign="middle" textAlign="center">
        <Grid.Column style={{ maxWidth: 150 }}>
          <Segment textAlign="center" raised>
            <Icon
              link
              circular
              inverted
              color="teal"
              name="google"
              onClick={loginGoogle}
            />
            <Icon
              link
              circular
              inverted
              color="teal"
              name="facebook f"
              onClick={loginFace}
            />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Layout;
