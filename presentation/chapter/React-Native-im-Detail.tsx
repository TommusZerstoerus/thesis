import {Text, FlexBox, Heading, Image, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const ReactNativeImDetail = () => {
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
            transform: 'translateY(-100%)'
        }
    };

    const transitionUp = {
        from: {
            opacity: 0,
            transform: 'translateY(100%)'
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0%)'
        },
        leave: {
            opacity: 1,
            transform: 'translateY(100%)'
        }
    };

    return (
        <>
            <Slide transition={transitionDown} backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">React Native im Detail</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>2015 durch Meta veröffentlicht</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Komponentenbasierte Entwicklung</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Verwendung von JavaScript/TypeScript</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Interpretation und danach Übersetzung durch die Bridge ins Native</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nutzung von JavaScript-Engine Hermes/JavaScriptCore</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide transition={transitionUp} backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">React Native im Detail</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Asynchrone Kommunikation</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ergänzung durch JavaScript Libraries</Text>
                    </ListItem>
                    <FlexBox>
                        <Image width="700" src="/images/reactnative-bridge.png"></Image>
                    </FlexBox>
                </UnorderedList>
            </Slide>
        </>
    )
}
