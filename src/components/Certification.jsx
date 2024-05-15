import { Container, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";

export const Certification = () => {
  return (
    <>
      <Container as="section" maxWidth="8xl" my={200}>
        <Heading>CERTIFICACÍON</Heading>

        <Container as="section" maxWidth="6xl" my={10}>
          <Heading>BENEFICIOS</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as="MdCheckCircle" color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon as="MdCheckCircle" color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon as="MdCheckCircle" color="green.500"/>
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as="MdSettings" color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </Container>
      </Container>
    </>
  );
};
