import { Button, Container, Menu } from "semantic-ui-react";

type Props = {
  setFormOpen: (value: boolean) => void
}

export function NavBar({ setFormOpen }: Props) {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/logo.png" alt="Logo" />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button onClick={() => setFormOpen(true)} floated="right" positive inverted content="Create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button basic inverted content="Register" style={{ marginLeft: "0.5em" }} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}