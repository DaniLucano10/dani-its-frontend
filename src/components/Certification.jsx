import { Box, Container, Flex, Heading, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

import Carousel from 'react-bootstrap/Carousel';

export const Certification = () => {
  return (
    <>
      <Container as="section" maxWidth="8xl" my={300} >
        <Heading color="#09155f">CERTIFICACÍON</Heading>

        <Container as="section" maxWidth="7xl" my="105px">

          <Heading color="#019CFE">BENEFICIOS</Heading>

          <Flex direction="row" my="40px" >

            <List spacing={3}>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                CANTIDAD DE HORAS: 30 HORAS
              </ListItem>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                RANGO: NIVEL INTERNACIONAL
              </ListItem>
              <ListItem>
                <ListIcon as="MdCheckCircle" color="green.500" />
                MEDIO DE ENTREGA: ONLINE Y VIRTUAL
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as="MdSettings" color="green.500" />
                NOTA MINIMA DE APROBACION: 13 DE 20 PUNTOS
              </ListItem>
            </List>

            <Box justifyContent="center" display="flex" alignContent="center" width="800px" height="100px">
              <Carousel data-bs-theme="dark" >
                <Carousel.Item height="100px">
                  <Stack >
                    <Image
                      boxSize="100px"
                      objectFit="cover"
                      src="../src/assets/imgs/correo.jpg"
                    />
                  </Stack>
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/imgs/dni.jpg"
                    
                  />
                  
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../src/assets/imgs/ficha.jpg"
                    
                  />
                  
                </Carousel.Item>
              </Carousel>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  );
};
