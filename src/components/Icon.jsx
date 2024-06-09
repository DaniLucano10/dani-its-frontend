import { Box, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoChevronUp } from "react-icons/go";

export const Icon = () => {
  
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos >= 200 ;

      setIsVisible(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <Box
    
      position="fixed" bottom={8} right={8} zIndex={1000}
      style={{ visibility: isVisible ? "visible" : "hidden" }}
      size={{ base: 'md', md: 'lg', lg:'lg'}}
      bg="#019CFE"
      fontSize={['16px', '20px', '10px']}
      borderRadius={3}
    >
    <IconButton
          icon={<GoChevronUp    color="white"/>}
          aria-label="Scroll to top"
          size="sm"
          fontSize={['16px', '20px', '25px']}
          colorScheme="#019CFE"
          variant="solid"
          onClick={scrollToTop}  
          
        />
      
    </Box>
  )
}
