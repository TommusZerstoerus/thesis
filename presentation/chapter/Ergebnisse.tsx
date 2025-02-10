import {Box, CodeSpan, FlexBox, Grid, Heading, Image, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const Ergebnisse = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">100 Würfel</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20} mt={-30}>Höhere Werte = bessere Leistung</CodeSpan>
                <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
                    <Image width="650" src={"/images/android/100Cubes.png"}/>
                    <Box>
                        <Image width="500" src={"/images/100cubeTable.png"}/>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize={28}>
                                    Beide Frameworks performant
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize={28}>
                                    React Native zeigt Schwankungen
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Image width="650" src={"/images/web/100Cubes.png"}/>
                </Grid>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">1000 Würfel</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20} mt={-30}>Höhere Werte = bessere Leistung</CodeSpan>
                <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
                    <Image width="650" src={"/images/android/1000Cubes.png"}/>
                    <Box>
                        <Image width="500" src={"/images/1000cubeTable.png"}/>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize={28}>
                                    Deutliche Perfomance Unterschiede
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize={28}>
                                    Leistung anders auf den Endgeräten
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Image width="650" src={"/images/web/1000Cubes.png"}/>
                </Grid>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Speicher</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20} mt={-30}>Niedrigere Werte = bessere Leistung</CodeSpan>
                <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
                    <Image width="650" src={"/images/android/Storage.png"}/>
                    <Box>
                        <Image width="500" src={"/images/StorageTable.png"}/>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize={28}>
                                    Flutter deutlich schneller
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize={28}>
                                    Android langsamer als Web
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Image width="650" src={"/images/web/Storage.png"}/>
                </Grid>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Sieb des Eratosthenes</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20} mt={-30}>Niedrigere Werte = bessere Leistung</CodeSpan>
                <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
                    <Image width="650" src={"/images/android/Prime.png"}/>
                    <Box>
                        <Image width="500" src={"/images/PrimeTable.png"}/>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize={28}>
                                    Flutter minimal performanter
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize={28}>
                                    Unterschiede zwischen Web und Android
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Image width="650" src={"/images/web/Prime.png"}/>
                </Grid>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">State Management</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20} mt={-30}>Niedrigere Werte = bessere Leistung</CodeSpan>
                <Grid gridTemplateColumns="1fr 1fr" gridGap={20}>
                    <Image width="650" src={"/images/android/State.png"}/>
                    <Box>
                        <Image width="500" src={"/images/StateTable.png"}/>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize={28}>
                                    Erhebliche Plattform Unterschiede
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize={28}>
                                    React Native im Web perfomanter
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Image width="650" src={"/images/web/State.png"}/>
                </Grid>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Auswertung der Forschungsfrage 1</Heading>
                </FlexBox>
                <Text fontStyle="italic">Wie unterscheiden sich React Native und Flutter in Render- und Rechenleistung
                    bei typischen Entwicklungsaufgaben?</Text>
                <FlexBox>
                    <Image width={500} src={"/images/question1.png"}/>
                    <Box maxWidth={500}>
                        <UnorderedList>
                            <ListItem>
                                <Text>Flutter ist in der meisten Durchläufen schneller</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Architektur mögliche Ursache</Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Auswertung der Forschungsfrage 2</Heading>
                </FlexBox>
                <Text fontStyle="italic">Gibt es Unterschiede der Leistung auf verschiedenen Endgeräten?</Text>
                <FlexBox>
                    <Image width={600} src={"/images/question2.png"}/>
                    <Box maxWidth={500}>
                        <UnorderedList>
                            <ListItem>
                                <Text>Flutter weist eine geringere Abweichung auf</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Übersetzung mögliche Ursache - Bridge</Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Auswertung der Forschungsfrage 3</Heading>
                </FlexBox>
                <Text fontStyle="italic">Welches Framework ist für die alltägliche Praxis im Hinblick auf die Leistung
                    attraktiver?</Text>
                <FlexBox>
                    <Image width={600} src={"/images/question3.png"}/>
                    <Box maxWidth={500}>
                        <UnorderedList>
                            <ListItem>
                                <Text>Geringe Abweichungen</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Flutter mit besserer Leistung</Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Auswertung der fundamentalen Forschungsfrage</Heading>
                </FlexBox>
                <Text fontStyle="italic">Welche messbaren Unterschiede in der Darstellungsleistung ergeben sich im
                    Vergleich zwischen Flutter und React Native in modernen Cross-Plattform-Anwendungen?</Text>
                <UnorderedList>
                    <ListItem>
                        <Text>Benchmarks messten bessere Werte bei Flutter</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Starke Unterschiede auf den Endgeräten bei React Native</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Realitätsnahe Werte sorgen für kaum merkbare Unterschiede</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}