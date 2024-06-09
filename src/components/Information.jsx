import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Information = () => {
  return (
    <>
      <Box
        overflow="hidden"
        ml={{ base: "center", md: "0rem" }}
        mt={{base: "4rem", md: "5rem"}}
        bg="#000000" >
        <Box
          mt={{ base: 10, xl: 10 }}
          ml={{ base: "center", xl: "30" }}
        >
          <SimpleGrid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          >
            <Card align="center" bg="#000000 " borderRadius="full" color="#FFFFFF" ml={{ base: "center" }} >
              <CardHeader>
                <Heading size="md" >
                  <Link href="https://its.institute/" target="_blank">
                    <Image src="../src/assets/imgs/logo.png" width="40" />
                  </Link>
                </Heading>

                <Text fontSize="22px">Respaldado por:</Text>
              </CardHeader>
              <CardBody>
                <Flex my="4px">
                  <Image src="../src/assets/imgs/sap.png" width="20" />
                  <Image src="../src/assets/imgs/iso.png" width="20" />
                </Flex>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
            <Card my={{ base: -5, xl: "30" }} bg="#000000" color="#FFFFFF">
              <CardHeader>
                <Heading size="md" color="#019CFE">
                  {" "}
                  Cursos Funcionales
                </Heading>
              </CardHeader>
              <CardBody>
                <Text >
                  SAP Business One <br />SAP MM S/4HANA Logística Digital <br /> SAP PM
                  S/4HANA Mantenimiento digital <br />SAP FI S/4HANA Finanzas
                  Digitales <br />SAP TR S/4HANA Gestión Bancaria SAP HCM Gestión
                  Recursos Humanos
                </Text>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
            <Card my={{ base: -5, xl: "30" }} bg="#000000" color="#FFFFFF">
              <CardHeader>
                <Heading size="md" color="#019CFE">
                  {" "}
                  Cursos Tecnicos
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  SAP ABAP S/4HANA Lenguaje de Programación <br />Plataforma
                  tecnológica empresarial SAP BTP
                </Text>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>

            <Card my={{ base: -5, xl: "30" }} bg="#000000" color="#FFFFFF">
              <CardHeader>
                <Heading size="md" color="#019CFE">
                  {" "}
                  Contáctanos
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack direction="row" spacing={4}>
                  <Heading colorScheme="blue" variant="solid">
                    <Link
                      href="https://www.facebook.com/latam.its.institute"
                      target="_blank"
                    >
                      <FaFacebook />
                    </Link>
                  </Heading>
                  <Heading colorScheme="blue" variant="solid">
                    <Link
                      href="https://www.youtube.com/@ITS.institute"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </Heading>
                  <Heading colorScheme="blue" variant="solid">
                    <Link
                      href="https://www.linkedin.com/company/its-institute/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </Link>
                  </Heading>
                </Stack>

                <Stack direction="row" spacing={4} my="10px">
                  <Heading colorScheme="blue" variant="solid">
                    <Link href="mailto:info@itsystems.pe" target="_blank">
                      <EmailIcon />
                    </Link>
                  </Heading>
                  <Text my={4}>
                    <Link
                      href="mailto:info@itsystems.pe"
                      target="_blank"
                      rel="nooper"
                      color="#019CFE"
                    >
                      info@itsystems.pe
                    </Link>
                  </Text>
                </Stack>

                <Stack direction="row" spacing={4} my="10px">
                  <Heading colorScheme="blue" variant="solid">
                    <Link href="tel:016575064" target="_blank">
                      <PhoneIcon />
                    </Link>
                  </Heading>
                  <Text my={4}>
                    <Link
                      href="tel:016575064"
                      target="_blank"
                      rel="nooper"
                      color="#019CFE"
                    >
                      ( +511 )399 8072
                    </Link>
                  </Text>
                </Stack>

                <Stack direction="row" spacing={4} my="20px">
                  <Heading colorScheme="blue" variant="solid">
                    <Link
                      href="https://maps.app.goo.gl/bLVLmhe767NgypV88"
                      target="_blank"
                    >
                      <FaLocationDot />
                    </Link>
                  </Heading>
                  <Text my={-2}>
                    <Link
                      href="https://maps.app.goo.gl/bLVLmhe767NgypV88"
                      target="_blank"
                      rel="nooper"
                    >
                      Av. Petit Thouars 1775, Edificio Empresarial EL ALMIRANTE
                      OF. 1303
                    </Link>
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </SimpleGrid>

        </Box>
      </Box>
      <Text as="center" bg="black" color="#FFFFFF" p={5} fontSize={20}>
        © 2024 ITS.INSTITUTE, todos los derechos reservados.
      </Text>
    </>
  );
};
