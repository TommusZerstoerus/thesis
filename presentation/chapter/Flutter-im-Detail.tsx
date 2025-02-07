import {CodePane, CodeSpan, FlexBox, Heading, ListItem, Slide, Text, UnorderedList} from "spectacle";
import React from "react";

export const FlutterImDetail = () => {
    return (
        <>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Flutter im Detail</Heading>
                </FlexBox>
                <UnorderedList>
                    <ListItem>
                        <Text>2017 erstmals durch Google erschienen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Programmiersprache - Dart</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Widgets als Bausteine</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Direkte Kompilierung zur Zielsprache</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Rendering Engine - Skia</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Method Channel dient zur Kommunikation</Text>
                    </ListItem>
                </UnorderedList>
            </Slide>
            <Slide backgroundColor="quaternary">
                <FlexBox justifyContent="flexStart" width="100%">
                    <Heading fontSize="h2">Method Channel Implementierung</Heading>
                </FlexBox>
                <CodeSpan  fontStyle="italic" fontSize={20}>Flutter Vibration Plugin</CodeSpan>
                <CodePane language={"dart"}>
                    {`public static func register(with registrar: FlutterPluginRegistrar) {
    let channel = FlutterMethodChannel(name: "vibration", binaryMessenger: registrar.messenger())
    let instance = VibrationPluginSwift()

    if #available(iOS 13.0, *) {
        VibrationPluginSwift.createEngine()
    }
            
    registrar.addMethodCallDelegate(instance, channel: channel)
}`}
                </CodePane>
            </Slide>
        </>
    )
}