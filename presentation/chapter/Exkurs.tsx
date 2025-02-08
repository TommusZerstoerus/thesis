import {Box, FlexBox, Heading, Image, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const Exkurs = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Exkurs</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>Stetige Weiterentwicklung</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Einbindung von Libraries</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Anpassung der Frameworks</Text>
                        <UnorderedList>
                            <ListItem>
                                React Native Skia
                            </ListItem>
                            <ListItem>
                                Flutter Bloc
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Unterschiede im - React Native</Heading>
                </FlexBox>
                <FlexBox justifyContent="center">
                    <FlexBox width={900} justifyContent="space-between" flexGap={5}>
                        <Box>
                            <Image height={450} src="/images/form/android/react_native/modal.png"/>
                            <Text>Android</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/web/react_native/modal.png"/>
                            <Text>Web</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/iOS/react_native/modal.png"/>
                            <Text>iOS</Text>
                        </Box>
                    </FlexBox>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Unterschiede im - React Native</Heading>
                </FlexBox>
                <FlexBox justifyContent="center">
                    <FlexBox width={900} justifyContent="space-between" flexGap={5}>
                        <Box>
                            <Image height={450} src="/images/form/android/react_native/dateOpen.png"/>
                            <Text>Android</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/web/react_native/dateOpen.png"/>
                            <Text>Web</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/iOS/react_native/dateOpen.png"/>
                            <Text>iOS</Text>
                        </Box>
                    </FlexBox>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Unterschiede im Design - Flutter</Heading>
                </FlexBox>
                <FlexBox justifyContent="center">
                    <FlexBox width={900} justifyContent="space-between" flexGap={5}>
                        <Box>
                            <Image height={450} src="/images/form/android/flutter/modal.png"/>
                            <Text>Android</Text>
                        </Box>
                        <Box>
                            <Image style={{aspectRatio: "auto"}} height={450} src="/images/form/web/flutter/modal.png"/>
                            <Text>Web</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/iOS/flutter/modal.png"/>
                            <Text>iOS</Text>
                        </Box>
                    </FlexBox>
                </FlexBox>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Unterschiede im - Flutter</Heading>
                </FlexBox>
                <FlexBox justifyContent="center">
                    <FlexBox width={1200} justifyContent="space-between" flexGap={5}>
                        <Box>
                            <Image height={450} src="/images/form/android/flutter/dateOpen.png"/>
                            <Text>Android</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/web/flutter/dateOpen.png"/>
                            <Text>Web</Text>
                        </Box>
                        <Box>
                            <Image height={450} src="/images/form/iOS/flutter/dateOpen.png"/>
                            <Text>iOS</Text>
                        </Box>
                    </FlexBox>
                </FlexBox>
            </Slide>
        </>
    )
}