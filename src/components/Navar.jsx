import { Box, Image } from "@chakra-ui/react";

export const Navar = () => {
  return (
    <>
      <Box
        bg="black"
        as="a"
        href="https://example.com"
        display="block"
        width="100%"
        overflow="hidden"
       
        p={{ base: '10px', md: '10px' }} 
        
      >
        <Box
          as="a"
          href="https://its.institute/"
          target="_blank"
          maxWidth="100%"
          display="block"
          my={{ base: '4px', md: '1px' }}
          ml={{base: '15px',md: '50px',xl:'50px'}}
          width={{ base: '100%', md: '100%' }} // Ancho: 80% en móviles, 50% en escritori
        >
          <Image
            src="../src/assets/imgs/logo.png"
            boxSize={{ base: "40%", md: "23%", xl: "13%" }}
            
          />
          
        </Box>
      </Box>
    </>
  );
};
