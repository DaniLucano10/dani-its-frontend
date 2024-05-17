import { Box, Center, HStack, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { Container } from "react-bootstrap";



export const Teachers = () => {

  return (
    <>
     <Container as="section" maxWidth="6xl" my="200">
        <Heading color="#09155f" my={10}>NUESTROS INSTRUCTORES</Heading>
        <Center as="section" bg='gray.100' height="100vh" >

          <Box maxWidth="420" bg="white" padding="6">
            <Image
              src="../src/assets/imgs/img-teachers/carlos.jpg"
              alt="Svartifoss Waterfall"
              borderRadius="xl"
              objectFit="cover"
              mx="auto"
            />
            <HStack mt='5' spacing='3'>
              {['Waterfall', 'Nature'].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </HStack>
            <Heading my="4" size="lg">
              fdzbghfbfdbzfd
            </Heading>
            <Text>erhnbefdnhbredfnfnenrenre</Text>
          </Box>
        </Center>
        </Container>
    </>

  );
};
