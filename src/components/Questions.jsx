import Accordion from "react-bootstrap/Accordion";
import { Container, Heading } from "@chakra-ui/react";

export const Questions = () => {
  return (
    <>
      <Container as="section" maxWidth="8xl" my={100}>
        <Heading fontSize="4xl" my="60px" color="#09155f">
          PREGUNTAS FRECUENTES
        </Heading>

        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo ingreso a las clases?</Accordion.Header>
              <Accordion.Body>
                Todos los enlaces y recursos necesarios serán enviados por
                correo electrónico un día antes de iniciar el curso, debe estar
                pendiente a su bandeja de entrada, recomendable también revisar
                su bandeja de spam.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                ¿Tendré acceso al sistema SAP?
              </Accordion.Header>
              <Accordion.Body>
                Claro que sí, enviaran por correo electrónico el instalador SAP
                para que realice sus prácticas. En caso necesite ayuda ante
                inconvenientes que se presente con el sistema SAP, puede
                contactarse a soporte técnico para que lo solucione.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Como obtengo mi certificado?</Accordion.Header>
              <Accordion.Body>
                Aprobando el examen de certificación, el certificado será
                enviado en digital vía correo electrónico, en el tiempo
                establecido en el reglamento de usuario que se le compartirá
                antes de iniciar el curso.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                ¿El certificado tiene peso internacional?
              </Accordion.Header>
              <Accordion.Body>
                ¡Sí! Nuestras certificaciones son a nivel Key User, con peso
                internacional.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>¿La certificación caduca?</Accordion.Header>
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
                Si no apruebo el curso, tengo oportunidad para certificarme?
              </Accordion.Header>
              <Accordion.Body>
                Si, puede rendir un examen sustitutorio realizando la gestión
                respectiva contactándose con gestión académica.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                ¿Cómo accederé a mis cursos complementarios?
              </Accordion.Header>
              <Accordion.Body>
                A través de una plataforma tecnológica.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                ¿Como me contacto con el área académica?
              </Accordion.Header>
              <Accordion.Body>
                Puedes contactar al área académica a través del número: : +51
                936 619 167 Clic aquí
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                ¿Cómo contacto a Soporte Técnico?
              </Accordion.Header>
              <Accordion.Body>
                Puedes contactar al área de Soporte Técnico a través del número:
                +51 935 338 564 Clic aquí
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
};
