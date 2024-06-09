import { useState } from "react";
import { Box, Button, Collapse } from '@chakra-ui/react';


export const Borrador = () => {


  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
        <Box p={4}>
        <Button onClick={handleToggle}>
          {show ? "Ocultar contenido" : "Mostrar contenido"}
        </Button>
        <Collapse in={show} animateOpacity>
          <Box
            mt="4"
            p="4"
            bg="teal.500"
            color="white"
            rounded="md"
            shadow="md"
          >
            Este es el contenido oculto que se mostrará al presionar el botón.
          </Box>
        </Collapse>
      </Box>

    </>
  )
}
