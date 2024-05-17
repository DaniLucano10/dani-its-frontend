
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Container } from "react-bootstrap";

export const Teachers = () => {
  return (
    <>
      <Container as="section">
        <Heading color="#09155f">NUESTROS INSTRUCTORES</Heading>
      </Container>
      <br/>
      <Container as="center" >
        <Card maxW="md">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="../src/assets/imgs/img-teachers/carlos.jpg"
                />

                <Box>
                  <Heading size="sm">CARLOS BAZALAR</Heading>
                  <Text>SAP BTP</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                //icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Card bg="#C4F1F9" >
            <Text>
              Consultor SAP especialista en temas logísticos (compras, ventas, inventarios, almacenes, produccion)
              con más de 5 años de experiencia. Ha particpado en proyectos en el sector Privado y Estatal, siendo Jefe de Proyecto
              / Arquitecto / Analista senior
            </Text>
            </Card>
            
          </CardBody>
          <Image
            
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          ></CardFooter>
        </Card>
      </Container>
    </>
  );
};
