import React from 'react';
import {createRoot} from 'react-dom/client';
import {Box, Deck, DefaultTemplate, FlexBox, Heading, Slide, Text,} from 'spectacle'
import {theme} from "./theme";
import {Einfuehrung} from "./chapter/Einfuehrung";
import {MethodenDerSoftwareentwicklung} from "./chapter/Methoden-der-Softwareentwicklung";
import {ReactNativeImDetail} from "./chapter/React-Native-im-Detail";
import {FlutterImDetail} from "./chapter/Flutter-im-Detail";
import {Anforderungsanalyse} from "./chapter/Anforderungsanalyse";
import {Implementierung} from "./chapter/Implementierung";
import {Exkurs} from "./chapter/Exkurs";
import {Fazit} from "./chapter/Fazit";

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
        <Einfuehrung/>
        <MethodenDerSoftwareentwicklung/>
        <ReactNativeImDetail/>
        <FlutterImDetail/>
        <Anforderungsanalyse/>
        <Implementierung/>
        <Exkurs/>
        <Fazit/>
    </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation/>);