import { Center } from "@chakra-ui/react";
import { useActions } from "bluesea-media-react-sdk"
import { useCallback, useState } from "react";

export const Header = () => {
    let actions = useActions();
    let [showUnmute, setShowUnmute] = useState(true);
    let unmute = useCallback(() => {
        actions.playAudioMix();
        setShowUnmute(false);
    }, []);
    
    return <Center>
        {showUnmute && <button onClick={unmute}>Unmute</button> }
    </Center>
}