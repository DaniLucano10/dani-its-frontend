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
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        width="100%"
        overflow="hidden"
        p="10"
        m="4"
      >
        <Heading
          textAlign={textAlign}
          color="#09155f"
          fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}
        >
          REQUISITOS DE INSCRIPCÍON
        </Heading>
        <Text>
          Envia los siguientes requisitos a tu asesor comercial para formalizar
          la inscripción
        </Text>
        <Container
          maxW={{ base: "100%", sm: "80%", md: "70%", lg: "60%", xl: "70%" }}
          p={{ base: 0, md: 0 }}
        >
          <Stack spacing={4} direction={{ base: "column", md: "row" }}>
            <Card bg="#ccebff" w="250px" h="200px">
              <CardBody>
                <Text color="#000000">Voucher o captura de pago</Text>
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

            <Card bg="#ccebff" w="250px" h="200px">
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

            <Card bg="#ccebff" w="250px" h="200px">
              <CardBody w="270px">
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

            <Card bg="#ccebff" w="250px" h="200px">
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
