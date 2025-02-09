import {
    Text,
    FlexBox,
    Heading,
    ListItem,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    UnorderedList
} from "spectacle";
import React from "react";

export const MethodenDerSoftwareentwicklung = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Methoden der Softwareentwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Codeebenen</Text>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <Text>Maschinenencode</Text>
                        </ListItem>
                        <UnorderedList>
                            <ListItem>
                                <Text>Tiefste Ebene</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Abhängig von der Architektur des Prozessors</Text>
                            </ListItem>
                        </UnorderedList>
                        <ListItem>
                            <Text>Bytecode</Text>
                        </ListItem>
                        <UnorderedList>
                            <ListItem>
                                <Text>Zwischensprache</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Genutzt von virtuellen Maschinen</Text>
                            </ListItem>
                        </UnorderedList>
                    </UnorderedList>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Native Entwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Abgestimmt auf das Endgerät</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Direkter Zugriff auf Eigenschaften und Funktion des Gerätes</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Android, iOS, Desktop ...</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Diverse mögliche Sprachen zur Umsetzung</Text>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <Text>Java, Kotlin, Swift, C++, C# ...</Text>
                        </ListItem>
                    </UnorderedList>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Webbasierte Software</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Kompilierung durch den Browser</Text>
                    </ListItem>
                    <ListItem>
                        <Text>HTML, CSS und JavaScript als Bausteine</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Flexible Nutzung durch den Browser auf nahzu allen Geräten</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Zahlreiche Frameworks</Text>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <Text>Angular, React, Vue.js ...</Text>
                        </ListItem>
                    </UnorderedList>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Cross-Plattform Entwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Flutter und React Native als beliebte Frameworks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Geteilte Code Basis für diverse Endgeräte</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Zugriff auf gerätspezifische Funktionen</Text>
                    </ListItem>
                </UnorderedList>
                <Table>
                    <TableHeader>
                        <TableCell><Text>Vorteile</Text></TableCell>
                        <TableCell><Text>Nachteile</Text></TableCell>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Zeitersparnis</TableCell>
                            <TableCell>Vereinzelt fehlende native Funktionen</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wiederverwendbarkeit</TableCell>
                            <TableCell>Potentielle Einbußen der Leistung</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Leichtere Instandhaltung</TableCell>
                            <TableCell>Geringes Expertenwissen</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Slide>
        </>
    )
}