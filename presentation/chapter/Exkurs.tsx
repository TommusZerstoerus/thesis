import {CodeSpan, FlexBox, Heading, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const Exkurs = () => {
    return (
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Exkurs</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
    )
}