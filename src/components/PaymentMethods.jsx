import {
  Button,
  Card,
  CardFooter,
  Container,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalHeader } from "react-bootstrap";

export const PaymentMethods = () => {
  const { isOpen, onOpen, onClose, onOpen1 } = useDisclosure("");
  return (
    <>
      <Container as="section" maxWidth="8xl" my={400}>
        <Heading color="#09155f">METODOS DE PAGO</Heading>

        <SimpleGrid
          maxW="6xl"
          my="50"
          spacing={50}
          templateColumns="repeat(auto-fill, minmax(200px, 4fr))"
        >
          <Card align="center"  bg="#FFFFFF">
            <CardFooter>
              <Button onClick={onOpen}>
                <Image src="../src/assets/imgs/img_pago/bbva1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/bbva1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      0011 0127 0100037344
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      011 127 00010003734487
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={onOpen1}>
                <Image src="../src/assets/imgs/img_pago/bcp1.png" h="35px" />
              </Button>
            </CardFooter>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxWidth={600}>
                <Container>
                  <Image
                    src="../src/assets/imgs/img_pago/bcp1.png"
                    h="55px"
                    margin={30}
                  />
                </Container>
                <Container margin={59}>
                  <ModalHeader>
                    <Heading fontSize="40px" color="#00B5D8">
                      ITSYSTEMS PERU S.A.C.{" "}
                    </Heading>
                  </ModalHeader>
                </Container>
                <ModalCloseButton />
                <Container>
                  <ModalBody>
                    <Heading ontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA CORRIENTE:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      0011 0127 0100037344
                    </Text>
                  </ModalBody>
                  <ModalBody>
                    <Heading fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      CUENTA INTERBANCARIA:
                    </Heading>
                    <Text fontSize="35px" color="RGBA(0, 0, 0, 0.64)">
                      011 127 00010003734487
                    </Text>
                  </ModalBody>
                </Container>
              </ModalContent>
            </Modal>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={onOpen}>
                <Image
                  src="../src/assets/imgs/img_pago/interbank1.png"
                  h="35px"
                />
              </Button>
            </CardFooter>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={onOpen}>
                <Image
                  src="../src/assets/imgs/img_pago/scotiabank1.png"
                  h="35px"
                />
              </Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardFooter>
              <Button onClick={onOpen}>
                <Image src="../src/assets/imgs/img_pago/niubiz1.png" h="35px" />
              </Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardFooter>
              <Button>
                <Link href="https://www.paypal.com/paypalme/Itsperu" isExternal>
                  <Image src="../src/assets/imgs/img_pago/paypal1.png" h="35px" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button link="https://www.paypal.com/paypalme/Itsperu">
                <Image src="../src/assets/imgs/img_pago/plin1.png" h="35px" />
              </Button>
            </CardFooter>
          </Card>

          <Card align="center">
            <CardFooter>
              <Button onClick={onOpen}>
                <Image src="../src/assets/imgs/img_pago/yape1.png" h="45px" />
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
};
