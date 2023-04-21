import { Center } from "@chakra-ui/react";
import { StreamRemote } from "bluesea-media-js-sdk";
import { VideoViewer } from "bluesea-media-react-sdk";

export const SingleVideo = ({remote}: {remote: StreamRemote}) => {
    return <Center style={{width: "100%", height: "100%", backgroundColor: "gray"}}>
        <VideoViewer style={{ overflow: "hidden", objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }} stream={remote} />
    </Center>
}