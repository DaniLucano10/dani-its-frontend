import { Container, Heading, Image, Stack } from "@chakra-ui/react"


export const PaymentMethods = () => {

    return (
        <>
            <Container as="section" maxWidth="8xl" my={-150}>
                <Heading>METODOS DE PAGO</Heading>
                <Stack direction="row">
                    <Image 
                        boxSize="100px"
                        objectFit="cover"
                        src="../src/assets/imgs/img_pago/bbva1.png"
                        alt="Dan Abramov"
                    />
                </Stack>
            </Container>
        </>
    )
}