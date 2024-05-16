import { Avatar, Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

export const Teachers = () => {

  return (
    <>
      <Container as="section" maxWidth="8xl" my={-150}>
        <Heading>NUESTROS INSTRUCTORES</Heading>

        <Flex my="50">
          <Avatar src="../src/assets/imgs/img-teachers/jonny.jpg" 
            alignItems="center"
            />
          <Box ml="5">
            <Text fontWeight="bold">
              JOHNNY CUSI
              <Badge ml="1" colorScheme="green">
              </Badge>
            </Text>
            <Text fontSize="sm">consultor SAP S4 MM, SD, WM, PP</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
