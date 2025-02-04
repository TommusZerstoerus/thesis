import {CodeSpan, FlexBox, Heading, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const Fazit = () => {
    return (
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Fazit</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
    )
}