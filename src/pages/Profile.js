import { Grid } from "semantic-ui-react";
import { Avatar } from "antd";
import MenuHead from "../auxiliar/Menu";
import "./ProfileStyle.css";

function Profile() {
  const dataString = localStorage.getItem("userLogin");
  const data = JSON.parse(dataString);
  return (
    <div>
      <MenuHead />
      <div id="userProfile">
        <h2>Meu perfil</h2>
        <Grid centered columns={4}>
          <Grid.Column>
            <Avatar size={64}>{data.toUpperCase().slice(0, 1)}</Avatar>
          </Grid.Column>
        </Grid>
      </div>
      <div id="contentUserProfile">
        <h3>Nome: Patrick W.</h3>
        <h3>Email: teste@teste</h3>
      </div>
    </div>
  );
}
export default Profile;
