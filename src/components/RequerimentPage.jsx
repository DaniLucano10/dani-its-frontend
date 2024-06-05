import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const RequerimentPage = () => {
  const textAlign = useBreakpointValue({ base: "center", md: "left" });

  return (
    <>
      <Box
        overflow="hidden"
        height="auto"
        margin="auto"
        ml={{base:"center", md: "7rem", xl:"7rem"}}
        mt="4rem"
      >
        <Heading
          textAlign={textAlign}
          color="#09155f"
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
        >
          REQUISITOS DE INSCRIPCÍON
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl", lg: "xl" }} ml={{base:"2rem", md: "0rem", xl:"0rem"}}>
          Envia los siguientes requisitos a tu asesor comercial para formalizar
          la inscripción
        </Text>
        <Container
          maxW={{ base: "70%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}
          p={{ base: "2", md: "4", lg: "10" }}
        >
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <Card
              bg="#ccebff"
              w="100%"
              borderRadius="1.5rem"
              overflow="hidden"
            >
              <CardBody>
                <Text fontSize={{ base: "lg", md: "lg", lg: "lg" }} color="#000000">Voucher o captura de pago</Text>
                <Flex align="center" justify="center">
                  <Image
                    boxSize={{ base: "80px", md: "100px" }}
                    src="../src/assets/imgs/voucher.jpg"
                    _hover={{
                      transform: "scale(1.1)",
                      filter: "grayscale(50%)",
                    }}
                  />
                </Flex>
              </CardBody>
            </Card>

            <Card 
              bg="#ccebff"
              w="100%"
              borderRadius="1.5rem"
              overflow="hidden"
            >
              <CardBody>
                <Text color="#000000">Correo electrónico personal</Text>
                <Flex align="center" justify="center">
                  <Image
                    boxSize="100px"
                    src="../src/assets/imgs/correo.jpg"
                    _hover={{
                      transform: "scale(1.1)",
                      filter: "grayscale(50%)",
                    }}
                  />
                </Flex>
              </CardBody>
            </Card>

            <Card
              bg="#ccebff"
              w="100%"
              borderRadius="1.5rem"
              overflow="hidden"
            >
              <CardBody>
                <Text color="#000000">Foto de la parte frontal del DNI</Text>
                <Flex align="center" justify="center">
                  <Image
                    boxSize="100px"
                    src="../src/assets/imgs/dni.jpg"
                    _hover={{
                      transform: "scale(1.1)",
                      filter: "grayscale(50%)",
                    }}
                  />
                </Flex>
              </CardBody>
            </Card>

            <Card 
              bg="#ccebff"
              w="100%"
              borderRadius="1.5rem"
              overflow="hidden"
            >
              <CardBody>
                <Text color="#000000">Rellenar ficha de inscripción</Text>
                <Flex align="center" justify="center">  
                  <Image
                    boxSize="100px"
                    src="../src/assets/imgs/ficha.jpg"
                    _hover={{
                      transform: "scale(1.1)",
                      filter: "grayscale(50%)",
                    }}
                  />
                </Flex>
              </CardBody>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
