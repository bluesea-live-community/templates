import { useRemoteStreams } from "bluesea-media-react-sdk"
import { StreamKinds } from "bluesea-media-js-sdk"
import { SingleVideo } from "./single_video"
import { Header } from "./header"
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { useMemo } from "react"

export const InnerView = () => {
    let remotes = useRemoteStreams(StreamKinds.VIDEO)
    let { numCols }  = useMemo(() => {
        switch (remotes.length) {
            case 1:
                return { numCols: 1 };
            case 2:
            case 3:
            case 4:
                return { numCols: 2 };
            default:
                return { numCols: 3 };
            
        }
    }, [remotes.length])

    return <Flex direction={"column"} height={"100%"}>
        <Header />
        <Grid flex="1" templateColumns={`repeat(${numCols}, 1fr)`} gap={4} width={"100%"}>
            {remotes.map((remote) => {
                return <GridItem><SingleVideo remote={remote} /></GridItem>
            })}
        </Grid>
    </Flex>
}