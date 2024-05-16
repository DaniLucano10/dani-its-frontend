import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Container from "react-bootstrap/Container";


export const Information = () => {
  return (
    <>
      <Box h="100%" bg="#000000" marginTop="40">
        <Container as="section">
          <Flex direction="row" margin={-100}>
            <Link
              margin={50}
              fontSize="20px"
              href="https://platzi.com/blog/react-css/"
              color="#FFFFFF"
              my="20"
            >
              INSTITUTE
            </Link>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={200}>
              Cursos funcionales
              <div>
                <Text>SAP Business One</Text>
                <Text color="#FFFFFF" fontSize="15px">
                  SAP MM S/4HANA Logística Digital
                </Text>
                <Text fontSize="15px">
                  SAP PM S/4HANA Mantenimiento digital
                </Text>
                <p>SAP FI S/4HANA Finanzas Digitales</p>
                <p>SAP TR S/4HANA Gestión Bancaria</p>
                <p>SAP HCM Gestión Recursos Humanos</p>
              </div>
            </Text>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={200}>
              cursos tecnicos
            </Text>
            <Text fontSize="20px" margin={20} color="#FFFFFF" marginLeft={200}>
              Contáctanos
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
