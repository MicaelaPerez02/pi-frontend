import { useCallback } from "react";
import FeaturesPost from "./FeaturesPost";
export default function useFeatures() {
    const Features = useCallback(
        (air_conditioning, wi_fi, heating, parking, gym) => {
            FeaturesPost(air_conditioning, wi_fi, heating, parking, gym);
        }, []
    );

    return {
        Features,
    }
}