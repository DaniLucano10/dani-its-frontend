import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export const CourseAccordion = () => {
  return (
    <>
      <Container as="section" maxWidth="4xl">
        <img src="../src/assets/imgs/sap_funcional.jpg.png" alt="" />
        <Container as="section" maxWidth="6xl">
          <Text> CURSO SAP funcional</Text>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SAP S/4HANA MM Logistica Digital
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Jefe de logistica</ListItem>
                  <ListItem>Coordinador lofistico</ListItem>
                  <ListItem>Consultor de procesos logisticos</ListItem>
                  <ListItem>Analista de compras y materiales</ListItem>
                  <ListItem>Asistente de aprovisionamiento</ListItem>
                  <ListItem>Ejecutivos de comercio exterior</ListItem>
                </UnorderedList>
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
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Container>
    </>
  );
};
