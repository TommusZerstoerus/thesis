import { Text, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from "spectacle";
import React from "react";

export const Einfuehrung = () => {
    const transitionDown = {
        from: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        leave: {
            opacity: 0,
            transform: 'translateY(100%)'
        }
    };

    const transitionUp = {
        from: {
            opacity: 0,
            transform: 'translateY(-100%)'
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        leave: {
            opacity: 1,
            transform: 'translateY(-100%)'
        }
    };

    return (
        <>
            <Slide transition={transitionDown} backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Einführung</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Verschiedene Arten Software zu entwickeln</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Endgeräte variieren</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Leistung und Aufwand schwankt zwischen den Technologien</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide transition={transitionUp} backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Cross-Plattform-Frameworks</Heading>
                </FlexBox>
                <UnorderedList>
                    <FlexBox>
                        <Image width="640" src="/images/statista.png" alt="Statista Anzeige Cross Platform Frameworks"/>
                    </FlexBox>
                    <FlexBox width="100%" justifyContent="space-between">
                        <Image width="200"
                               src="https://storage.googleapis.com/cms-storage-bucket/847ae81f5430402216fd.svg"
                               alt="Flutter Logo"/>
                        <Image width="200" src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                               alt="React Native Logo"/>
                    </FlexBox>
                </UnorderedList>
            </Slide>
        </>
    );
};
