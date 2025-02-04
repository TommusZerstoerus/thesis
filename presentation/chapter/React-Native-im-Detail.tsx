import {CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const ReactNativeImDetail = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox width="100%">
                    <Heading fontSize="h2">React Native im Detail</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>2015 durch Meta veröffentlicht</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Komponentenbasierte Entwicklung</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Verwendung durch JavaScript/TypeScript</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Kompilierung durch die Bridge in die nativen Elemente</CodeSpan>
                    </ListItem>
                    <FlexBox>
                        <Image width="500" src="./images/reactnative-bridge.png"></Image>
                    </FlexBox>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox width="100%">
                    <Heading fontSize="h2">React Native im Detail</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan>2015 durch Meta veröffentlicht</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Komponentenbasierte Entwicklung</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Verwendung durch JavaScript/TypeScript</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan>Kompilierung durch die Bridge in die nativen Elemente</CodeSpan>
                    </ListItem>
                </UnorderedList>
            </Slide>
        </>
    )
}