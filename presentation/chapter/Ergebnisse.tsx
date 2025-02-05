import {Box, FlexBox, Heading, Image, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const Ergebnisse = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">100 Würfel</Heading>
                </FlexBox>
                <FlexBox ml={2} height={"75%"} flexDirection="column" alignItems={"flex-start"}
                         justifyContent={"space-between"}>
                    <Image width="650" src={"/images/android/100Cubes.png"}/>
                    <Image width="650" src={"/images/web/100Cubes.png"}/>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">1000 Würfel</Heading>
                </FlexBox>
                <FlexBox ml={2} height={"75%"} flexDirection="column" alignItems={"flex-start"}
                         justifyContent={"space-between"}>
                    <Image width="650" src={"/images/android/1000Cubes.png"}/>
                    <Image width="650" src={"/images/web/1000Cubes.png"}/>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Speicher</Heading>
                </FlexBox>
                <FlexBox ml={2} height={"75%"} flexDirection="column" alignItems={"flex-start"}
                         justifyContent={"space-between"}>
                    <Image width="650" src={"/images/android/Storage.png"}/>
                    <Image width="650" src={"/images/web/Storage.png"}/>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Sieb des Eratosthenes</Heading>
                </FlexBox>
                <FlexBox ml={2} height={"75%"} flexDirection="column" alignItems={"flex-start"}
                         justifyContent={"space-between"}>
                    <Image width="650" src={"/images/android/Prime.png"}/>
                    <Image width="650" src={"/images/web/Prime.png"}/>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">State Management</Heading>
                </FlexBox>
                <FlexBox ml={2} height={"75%"} flexDirection="column" alignItems={"flex-start"}
                         justifyContent={"space-between"}>
                    <Image width="650" src={"/images/android/State.png"}/>
                    <Image width="650" src={"/images/web/State.png"}/>
                </FlexBox>
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
                                <Text>Kompilierung mögliche Ursache</Text>
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
                                <Text>Flutter oft mit besserer Leistung</Text>
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
                        <Text>Realitätsnahe Werte sorgen für kaum merkbare Unterschiede</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}