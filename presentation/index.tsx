import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    Appear,
    Box,
    CodeSpan,
    Deck,
    DefaultTemplate,
    FlexBox,
    Heading,
    ListItem,
    Slide,
    Text,
    UnorderedList
} from 'spectacle'
import {theme} from "./theme";

const Presentation = () => (
    <Deck theme={theme} template={() => <DefaultTemplate color={"#000000"}/>}>
        <Slide backgroundColor="quaternary">
            <FlexBox height="100%">
                <Heading>Bachelor Thesis Präsentation</Heading>
            </FlexBox>
            <Box>
                <Text fontSize={30}>
                    Leistungs- und Renderzeitvergleich von React Native und Flutter: Eine Analyse der Performance
                    moderner Cross-Plattform-Frameworks
                </Text>
            </Box>
            <FlexBox width="100%" justifyContent="space-between">
                <Text fontSize={25}>Tom Becke</Text>
                <Text fontSize={25}>Hochschule Flensburg</Text>
            </FlexBox>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Grundlegender Mist</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
    </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation/>);