import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Image,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ListItem, UnorderedList } from "@chakra-ui/react";


export const CourseAccordion = () => {
  return (
    <>
      
      <Container as="section" maxWidth="8xl">
        <Heading my="50px" fontSize="60px" color="#09155f"
          as={motion.h1}
          initial={{x: "-20px"}}
          animate={{ x: [0, 150, 50], opacity:1, scale: 1 }}
          transition="linear 0.2s"
        >
          PORTAL{" "}
        </Heading>
        <Heading my="-60px" fontSize="60px" color="#019CFE"
          as={motion.h1}
          initial={{x: "-50px"}}
          animate={{ x: [50, 150, 50], opacity:1, scale: 1 }}
          transition="linear 0.2s"
        >
          INFORMATIVO
        </Heading>
        
        <Heading my="150px" fontSize="40px" color="#09155f">
          CARGOS POR MÓDULOS
        </Heading>
      </Container>
      <Container as="section" maxWidth="6xl" h="100%">
        <Stack direction="row">
          <Image src="../src/assets/imgs/sap_funcional.png" />
        </Stack>

        <Container margin="-500px -150px 0px 450px">
          <Heading fontSize="4xl" my="60px">
            {" "}
            CURSO SAP funcional
          </Heading>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP S/4HANA MM Logística Digital
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Jefe de logística</ListItem>
                  <ListItem>Coordinador logístico</ListItem>
                  <ListItem>Consultor de procesos logísticos</ListItem>
                  <ListItem>Analista de compras y materiales</ListItem>
                  <ListItem>Asistente de aprovisionamiento</ListItem>
                  <ListItem>Ejecutivos de comercio exterior</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-s4-pm-mantenimiento-digital"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP S4 PM Mantenimiento Digital
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Jefe de mantenimiento</ListItem>
                  <ListItem>Spervisor de mantenimiento</ListItem>
                  <ListItem>Planer de mantenimiento</ListItem>
                  <ListItem>Tecnicos de mantenimiento</ListItem>
                  <ListItem>Controllorer de mantenimiento</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-s4-pm-mantenimiento-digital"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP S4 FI Finanzas Digitales
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Director financiero</ListItem>
                  <ListItem>Jefatura Contable</ListItem>
                  <ListItem>Planeador financiero</ListItem>
                  <ListItem>Analistas contables y finacieros</ListItem>
                  <ListItem>Analista de control presupuestal</ListItem>
                  <ListItem>Controller financiero</ListItem>
                  <ListItem>Asistentes contables financieros </ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-s4-fi-finanzas-digitales"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP S4 TR Gestion Bancaria
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Jefe de tesorería</ListItem>
                  <ListItem>Back office de tesorería</ListItem>
                  <ListItem>Trader financiero</ListItem>
                  <ListItem>Ejecutivo de cuentas bancarias</ListItem>
                  <ListItem>Analista de tesorería</ListItem>
                  <ListItem>Asistentes de Pagaduría</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-s4-tr-gestion-bancaria"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP ERP HCM Recursos Humanos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Jefe de recursos humanos</ListItem>
                  <ListItem>Gestor de recursos humanos</ListItem>
                  <ListItem>Analista de remuneraciones</ListItem>
                  <ListItem>Administrador de personal</ListItem>
                  <ListItem>Supervisor de talento humano</ListItem>
                  <ListItem>Coordinador de reclutamiento y seleccion</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-erp-hcm-gestion-de-recursos-humanos"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP Business One Gestíon Empresarial
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Administrador de empresa</ListItem>
                  <ListItem>Ingeniero industrial</ListItem>
                  <ListItem>Jefes y coordinadores de áreas</ListItem>
                  <ListItem>Consultor de procesos empresariales</ListItem>
                  <ListItem>Analistas de cadena de suministros</ListItem>
                  <ListItem>Analistas financieros contables</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-business-one-gestion-empresarial"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Container>
      ;
      <Container as="section" maxWidth="6xl" my="100px">
        <Stack direction="row">
          <Image src="../src/assets/imgs/sap-tecnico.png" />
        </Stack>
        <Container m="-450px -150px 0px 450px">
          <Heading fontSize="4xl"> CURSO SAP Técnico</Heading>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Cargos SAP ABAP
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Líder de proyectos ABAP</ListItem>
                  <ListItem>Programador ABAP</ListItem>
                  <ListItem>Desarrollador ABAP</ListItem>
                  <ListItem>Analista Técnico ABAP</ListItem>
                  <ListItem>Arquitecto ABAPER</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-s4-abap-lenguaje-de-programacion"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Cargos SAP BTP
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Líder de proyectos BTP</ListItem>
                  <ListItem>Desarrollador BTP</ListItem>
                  <ListItem>Arquitecto SAP BTP</ListItem>
                  <ListItem>programador BTP</ListItem>
                  <ListItem>Analista técnico BTP</ListItem>
                </UnorderedList>
                <Link
                  color="#2C5282"
                  href="https://its.institute/cursos/sap-btp-business-technology-platform"
                >
                  <Heading fontSize="15px">Más informacion del curso</Heading>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Container>
    </>
  );
};
