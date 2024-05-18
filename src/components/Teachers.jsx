import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";


export const Teachers = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <Container as="section" maxWidth="8xl" my={400}>
        <Heading color="#09155f">NUESTROS INSTRUCTORES</Heading>
      </Container>
      <br />
      <Container as="center" maxWidth="8xl" my={-350} >
        <Slider {...settings}>
          <Card maxW="md" bg="#C4F1F9">
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
                  Backend Java - developer, con mas de 20 años de experiencia en Tecnología de la Información y certificación SCRUM
                  Master. Ha participado en proyectos en el sector Privado y Estatal, siendo Jefe de Proyecto / Arquitecto / Analista Senior.
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

          <Card maxW="md" bg="#C4F1F9" >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="../src/assets/imgs/img-teachers/joel.jpg"
                  />

                  <Box>
                    <Heading size="sm">JOEL CAMPOS</Heading>
                    <Text>Consultor Senior SAP B1</Text>
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
                  Gestor de implementación Senior SAP Business One, con mas de 12 años de experiencia en implementaciones ERP,
                  mejoras continuas e Instrucción en temáticas de procesos de negocios en la PUCP y CIBERTEC.
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

          <Card maxW="md" bg="#C4F1F9" >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="../src/assets/imgs/img-teachers/jonny.jpg"
                  />

                  <Box>
                    <Heading size="sm">JOHNNY CUSI</Heading>
                    <Text>Consultor SAP S4 MM, SD, WM, PP</Text>
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
                  Consultor SAP especialista en temas logísticos (compras, ventas, inventarios, almacenes, producción)
                  con mas de 5 años de experiencia. Los módulos sap que comprenden en su formación y experiencia son MM, SD, WM, PP.
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

          <Card maxW="md" bg="#C4F1F9" >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="../src/assets/imgs/img-teachers/indira.jpg"
                  />

                  <Box>
                    <Heading size="sm">INDIRA CARHUAS</Heading>
                    <Text>Consultora Senior SAP S4 FI</Text>
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
                  Consultora senior SAP FI S4 HANA, con mas de 10 años de experiencia participando en proyectos de implementación sap
                  en la empresa del Grupo Romero, Telefónica del Perú.
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

          <Card maxW="md" bg="#C4F1F9" >
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="../src/assets/imgs/img-teachers/reynaldo.jpg"
                  />

                  <Box>
                    <Heading size="sm">REYNALDO TUPIÑO</Heading>
                    <Text>Consultor Senior SAP S4 ABAP</Text>
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
                  Consultor senior SAP ABAP S4 HANA, con mas de 10 años de experiencia en análisis, desarrollo e implementacion SAP
                  y brindando consultoría a empresas importantes.
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
        </Slider>
      </Container>
    </>
  );
};
