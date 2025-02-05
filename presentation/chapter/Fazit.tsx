import {Text, FlexBox, Heading, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const Fazit = () => {
    return (
        <Slide backgroundColor="quaternary">
            <FlexBox justifyContent="flexStart" width="100%">
                <Heading fontSize="h2">Fazit</Heading>
            </FlexBox>
            <UnorderedList>
                <ListItem>
                    <Text>Hackerman</Text>
                </ListItem>
            </UnorderedList>
        </Slide>
    )
}