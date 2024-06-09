import Accordion from "react-bootstrap/Accordion";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

export const Questions = () => {

  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  return (
    <>
      <Box 
        overflow="hidden"
        ml={{ base: "center", md: "7rem" }}
        mt={{base: "0rem", xl: "4rem"}}
        >
        <Heading ml={{ base: "-0.5em", md: "0rem" }} textAlign={textAlign} color="#09155f" fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
          PREGUNTAS FRECUENTES
        </Heading>

        <Box 
          maxW={{ base: "80%", sm: "80%", md: "60%", lg: "70%" }}
          
          overflow="hidden"
          ml={{base: "2rem", xl: "2rem"}}
          mt={{base: "2rem", xl: "2rem"}}
           textAlign="left"
           justifyContent="center"
          >
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header> <Heading fontSize="lg" color="#09155f">¿Cómo ingreso a las clases?</Heading> </Accordion.Header>
              <Accordion.Body>
                Todos los enlaces y recursos necesarios serán enviados por
                correo electrónico un día antes de iniciar el curso, debe estar
                pendiente a su bandeja de entrada, recomendable también revisar
                su bandeja de spam.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿Tendré acceso al sistema SAP?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                Claro que sí, enviaran por correo electrónico el instalador SAP
                para que realice sus prácticas. En caso necesite ayuda ante
                inconvenientes que se presente con el sistema SAP, puede
                contactarse a soporte técnico para que lo solucione.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿Como obtengo mi certificado?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                Aprobando el examen de certificación, el certificado será
                enviado en digital vía correo electrónico, en el tiempo
                establecido en el reglamento de usuario que se le compartirá
                antes de iniciar el curso.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿El certificado tiene peso internacional?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                ¡Sí! Nuestras certificaciones son a nivel Key User, con peso
                internacional.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿La certificación caduca?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                La certificación y conocimientos no tienen caducidad, sin
                embargo los conocimientos se deben mantener a la vanguardia de
                las actualizaciones digitales. Las empresas requieren valor
                digital actualizado.te con el sistema SAP, puede contactarse a
                soporte técnico para que lo solucione.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">Si no apruebo el curso, tengo oportunidad para certificarme?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                Si, puede rendir un examen sustitutorio realizando la gestión
                respectiva contactándose con gestión académica.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿Cómo accederé a mis cursos complementarios?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                A través de una plataforma tecnológica.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿Como me contacto con el área académica?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                Puedes contactar al área académica a través del número: : +51
                936 619 167 Clic aquí
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <Heading fontSize="lg" color="#09155f">¿Cómo contacto a Soporte Técnico?</Heading>
              </Accordion.Header>
              <Accordion.Body>
                Puedes contactar al área de Soporte Técnico a través del número:
                +51 935 338 564 Clic aquí
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};
