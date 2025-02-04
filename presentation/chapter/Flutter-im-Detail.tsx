import {CodeSpan, FlexBox, Heading, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const FlutterImDetail = () => {
    return (
        <Slide backgroundColor="quaternary">
            <FlexBox width="100%">
                <Heading fontSize="h2">Flutter im Detail</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <CodeSpan>Hackerman</CodeSpan>
                </ListItem>
            </UnorderedList>
        </Slide>
    )
}