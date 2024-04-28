import { useState } from "react";
import { Menu, Dropdown, Icon } from "semantic-ui-react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function MenuHead() {
  const navigateToHome = useNavigate();
  const navigateToLogin = useNavigate();
  const navigateToMyProfile = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleItemClick = () => {
    navigateToHome("/feed/:userId");
  };

  const logOff = () => {
    messageApi
      .open({
        type: "loading",
        content: "Deslogando..",
        duration: 1.5,
      })
      .then(() => navigateToLogin("/"));
  };
  const myProfile = () => {
    navigateToMyProfile("/myprofile");
  };

  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Menu inverted={darkMode} size="small" fixed="top" borderless>
        <Menu.Item
          icon={<Icon color="teal" name="home" size="large" />}
          onClick={handleItemClick}
        />
        <Menu.Item>
          <Icon
            link
            color="teal"
            name={darkMode ? "sun" : "moon"}
            onClick={handleChangeTheme}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            simple
            labeled
            icon={<Icon color="teal" name="user" size="large" />}
            item
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={myProfile}>
                <span>Meu perfil</span>
              </Dropdown.Item>
              <Dropdown.Item>Amigos</Dropdown.Item>
              <Dropdown.Item>Jogos</Dropdown.Item>
              <Dropdown.Item onClick={logOff}>
                {contextHolder}
                <span>Sair</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
