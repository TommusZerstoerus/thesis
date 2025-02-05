import {FlexBox, Heading, ListItem, OrderedList, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const Anforderungsanalyse = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Forschungsfragen</Heading>
                </FlexBox>
                <Text fontStyle="italic">
                    Welche messbaren Unterschiede in der Darstellungsleistung ergeben sich im Vergleich zwischen Flutter
                    und
                    React Native in modernen Cross-Plattform-Anwendungen?
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text>
                            Wie unterscheiden sich React Native und Flutter in Render- und Rechenleistung bei typischen
                            Entwicklungsaufgaben?
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Gibt es Unterschiede der Leistung auf verschiedenen Endgeräten?
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Welches Framework ist für die alltägliche Praxis im Hinblick auf die Leistung attraktiver?
                        </Text>
                    </ListItem>
                </OrderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Benchmarks</Heading>
                </FlexBox>
                <Text>
                    Tests decken einen Teil der elementaren Anforderungen ab
                </Text>
                <Text>
                    Vergleichbare und reproduzierbare Messwerte unter Laborbedingungen
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Text>Animation - Würfel</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nativ - Speichern auf dem Endgerät</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Rechenleistung - Sieb des Eratosthenes</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Zustandsverwaltung - State Management</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}