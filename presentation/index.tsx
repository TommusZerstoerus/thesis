import React from 'react';
import { createRoot } from 'react-dom/client';
import {Deck, DefaultTemplate, Slide, FlexBox, Heading, SpectacleLogo, Text, Box} from 'spectacle'

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <Heading>Bachelor Thesis Präsentation</Heading>
      </FlexBox>
        <Box>
            <Text>Leistungs- und Renderzeitvergleich von React Native und Flutter: Eine Analyse der Performance moderner Cross-Plattform-Frameworks</Text>
        </Box>
        <Text>Tom Becke</Text>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Made with</Heading>
        <SpectacleLogo size={300} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);