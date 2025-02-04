import {
    CodeSpan,
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
                <FlexBox width="100%">
                    <Heading fontSize="h2">Methoden der Softwareentwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>Unterteilung - Frontend und Backend</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Codeebenen</CodeSpan>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <CodeSpan>Maschinenencode</CodeSpan>
                        </ListItem>
                        <UnorderedList>
                            <ListItem>
                                <CodeSpan>Tiefste Ebene</CodeSpan>
                            </ListItem>
                            <ListItem>
                                <CodeSpan>Abhängig von der Architektur des Prozessors</CodeSpan>
                            </ListItem>
                        </UnorderedList>
                        <ListItem>
                            <CodeSpan>Bytecode</CodeSpan>
                        </ListItem>
                        <UnorderedList>
                            <ListItem>
                                <CodeSpan>Zwischensprache</CodeSpan>
                            </ListItem>
                            <ListItem>
                                <CodeSpan>Genutzt von virtuellen Maschinen</CodeSpan>
                            </ListItem>
                        </UnorderedList>
                    </UnorderedList>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox width="100%">
                    <Heading fontSize="h2">Native Entwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>Abgestimmt auf das Endgerät</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Direkter Zugriff auf Eigenschaften und Funktion des Gerätes</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Android, iOS, Desktop ...</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Diverse mögliche Sprachen zur Umsetzung</CodeSpan>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <CodeSpan>Java, Kotlin, Swift, Objective-C, C++, C# ...</CodeSpan>
                        </ListItem>
                    </UnorderedList>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox width="100%">
                    <Heading fontSize="h2">Webbasierte Software</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>Kompilierung durch den Browser</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>HTML, CSS und JavaScript als Bausteine</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Zahlreiche Frameworks</CodeSpan>
                    </ListItem>
                    <UnorderedList>
                        <ListItem>
                            <CodeSpan>Anuglar, React, Vue.js ...</CodeSpan>
                        </ListItem>
                    </UnorderedList>
                    <ListItem>
                        <CodeSpan>Flexible Nutzung durch den Browser auf nahzu allen Geräten</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>WebAssembly - Schnelle Ergänzung zu JavaScript </CodeSpan>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox width="100%">
                    <Heading fontSize="h2">Cross-Plattform Entwicklung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>Flutter und React Native als beliebte Frameworks</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Geteilte Code Basis für diverse Endgeräte</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Zugriff auf gerätspezifische Funktionen</CodeSpan>
                    </ListItem>
                </UnorderedList>
                <Table>
                    <TableHeader>
                        <TableCell><CodeSpan>Vorteile</CodeSpan></TableCell>
                        <TableCell><CodeSpan>Nachteile</CodeSpan></TableCell>
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