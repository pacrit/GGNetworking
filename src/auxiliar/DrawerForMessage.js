import { Input, List } from "semantic-ui-react";
import { Avatar } from "antd";

export default function DrawerForMessage() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Input placeholder="Procurar amigo" icon="search" />
      </div>
      <div>
        <List selection animated verticalAlign="middle">
          <List.Item>
            <Avatar>A</Avatar>
            <List.Content>
              <List.Header>Helen</List.Header>
              <List.Content>
                Fusce pulvinar tortor sit amet odio vehicula ultricies. Ut
                fringilla feugiat risus accumsan dignissim. Nam malesuada ex non
                pellentesque volutpat.
              </List.Content>
            </List.Content>
          </List.Item>
          <List.Item>
            <Avatar>L</Avatar>
            <List.Content>
              <List.Header>Christian</List.Header>
              <List.Content>
                Nulla ultrices vestibulum nulla eget tempus. Ut nisl odio,
                pharetra sed vehicula at, sollicitudin sit amet metus. Nulla
                faucibus nibh dui, at blandit sapien imperdiet ac. Donec id
                lacinia mauris. Donec consectetur massa quis arcu tincidunt,
                eget viverra magna luctus.
              </List.Content>
            </List.Content>
          </List.Item>
          <List.Item>
            <Avatar>V</Avatar>
            <List.Content>
              <List.Header>Daniel</List.Header>
              <List.Content>
                Fusce pulvinar tortor sit amet odio vehicula ultricies.
              </List.Content>
            </List.Content>
          </List.Item>
        </List>
      </div>
    </>
  );
}
