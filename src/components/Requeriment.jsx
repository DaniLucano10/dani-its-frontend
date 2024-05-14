import { Card, CardBody, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"

export const Requeriment = () => {

    return (
        <>
            <Container as="section" maxWidth="8xl" my={350} >
                <Heading >REQUISITOS DE INSCRIPCÍON</Heading>
                <Text>Envia los siguientes requisitos a tu asesor comercial para formalizar la inscripción</Text>
                <Stack direction="row">
                    <Card maxW="sm">
                        <CardBody>
                            <Text>Voucher o captura de pago</Text>
                            <Image
                                boxSize="100px"
                                src="../src/assets/imgs/voucher.jpg"
                                alt="Dan Abramov"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            Correo electrónico personal
                            <Image
                                boxSize="100px"
                                src="../src/assets/imgs/correo.jpg"
                                alt="Dan Abramov"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            Foto de la parte frontal del DNI
                            <Image
                                boxSize="100px"
                                src="../src/assets/imgs/dni.jpg"
                                alt="Dan Abramov"
                            />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            Rellenar ficha de inscripción
                            <Image
                                boxSize="100px"
                                src="../src/assets/imgs/ficha.jpg"
                                alt="Dan Abramov"
                            />
                        </CardBody>
                    </Card>
                </Stack>
            </Container>
        </>
    )
}