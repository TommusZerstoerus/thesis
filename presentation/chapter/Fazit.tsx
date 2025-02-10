import {Appear, Box, FlexBox, Heading, Image, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const Fazit = () => {
    return (
        <Slide backgroundColor="quaternary">
            <FlexBox justifyContent="flexStart" width="100%">
                <Heading fontSize="h2">Fazit</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <Text>
                        Im Leistungsbereich überzeugt Flutter
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                        Starke Differenz auf verschiedenen Endgeräten bei React Native
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                        Stetige Weiterentwicklung oder Anpassung beeinflussen die Ergebnisse
                    </Text>
                </ListItem>
            </UnorderedList>
            <Appear>
                <Box mt={100}>
                    <FlexBox justifyContent="center">
                        <Text fontStyle="italic" fontSize={40}>Vielen Dank für eure Aufmerksamkeit! 👋</Text>
                    </FlexBox>
                    <FlexBox width="100%" justifyContent="space-between">
                        <Image width="200"
                               src="https://storage.googleapis.com/cms-storage-bucket/847ae81f5430402216fd.svg"
                               alt="Flutter Logo"/>
                        <Image width="200" src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                               alt="React Native Logo"/>
                    </FlexBox>
                </Box>
            </Appear>
        </Slide>
    )
}