import { useState } from "react";

import { Button, Form, TextArea, Header, Divider } from "semantic-ui-react";

import { FloatButton, Drawer, Badge } from "antd";
import { MessageOutlined, FireOutlined } from "@ant-design/icons";

import MenuHead from "../auxiliar/Menu";

import "./FeedStyle.css";
import DrawerForMessage from "../auxiliar/DrawerForMessage";

function FeedPrincipal({ darkMode }) {
  let [drawerMessage, setDrawerMessage] = useState(false);
  let [postFeed, setPostFeed] = useState("");
  let [eventsFeed, setEventsFeed] = useState([]);
  let [countLike, setCountLike] = useState(0);

  const dataString = localStorage.getItem("userLogin");
  const dataName = JSON.parse(dataString);

  const addPostToFeed = () => {
    setEventsFeed([...eventsFeed, postFeed]);
    setPostFeed("");
  };

  const openDrawerMessage = () => {
    setDrawerMessage(true);
  };

  const closeDrawerMessage = () => {
    setDrawerMessage(false);
  };

  return (
    <div>
      <MenuHead />
      <div
        style={{
          padding: "0.5em",
          marginTop: "3.5em",
          backgroundColor: darkMode ? "#333" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <Header as="h3">Bem vindo, {dataName}</Header>
        <Form>
          <div id="textPost">
            <TextArea
              placeholder="Digite Aqui"
              value={postFeed}
              onChange={(e) => setPostFeed(e.target.value)}
            />
          </div>
          <Button color="teal" onClick={addPostToFeed}>
            Postar
          </Button>
        </Form>
      </div>
      <Divider />
      <div style={{ padding: "0.5em" }}>
        {/*<Feed events={eventsFeed} />*/}
        <div>
          {eventsFeed.map((post) => (
            <>
              <h3>{dataName} postou:</h3>
              <h4>{post}</h4>
              <Badge count={countLike} size="small" color="cyan">
                <FireOutlined
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  onClick={() => setCountLike(countLike + 1)}
                />
              </Badge>
              <i style={{ marginLeft: "3em" }}>{Date().slice(4, 21)}</i>
            </>
          ))}
        </div>
        <FloatButton
          badge={{
            dot: true,
          }}
          shape="circle"
          type
          style={{
            right: 10,
            color: "teal",
          }}
          icon={<MessageOutlined />}
          onClick={openDrawerMessage}
        />
        <Drawer
          title="Conversas"
          placement="right"
          onClose={closeDrawerMessage}
          open={drawerMessage}
          width={
            window.screen.width >= 1000 && window.screen.height >= 700
              ? "30%"
              : "90%"
          }
        >
          <DrawerForMessage />
        </Drawer>
      </div>
    </div>
  );
}
export default FeedPrincipal;
