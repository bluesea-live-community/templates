import { BlueseaSessionProvider } from "bluesea-media-react-sdk";
import { MixMinusMode, LogLevel } from "bluesea-media-js-sdk";
import { useSearchParams } from "react-router-dom";
import { InnerView } from "./inner_view";

export const ViewAllTemplate = () => {
    let [searchParams, ] = useSearchParams();
    let gateway = searchParams.get('gateway');
    let room = searchParams.get('room');
    let peer = searchParams.get('peer');
    let token = searchParams.get('token');
    let videos = parseInt(searchParams.get('videos') || '4');

    return (<div style={{height: "100%", width: "100%"}}>
        {gateway && room && peer && token ? 
            <BlueseaSessionProvider
                logLevel={LogLevel.WARN}
                gateways={gateway}
                room={room}
                peer={peer}
                token={token}
                mixMinusAudio={{ mode: MixMinusMode.AllAudioStreams }}
                receivers={{ audio: 0, video: videos }}
            >
                <InnerView/> 
            </BlueseaSessionProvider>
            :
            <div>Required query: gateway, room, peer, token</div>
        }
    </div>)
}