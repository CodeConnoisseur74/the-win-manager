import { useCallback, useState } from "react";
import axios from "axios";

export default function useRequestResource({ endpoint }) {
    const [resourceList, setResourceList] = useState({
        results: []
    });

    const getResourceList = useCallback(() => {
        axios.get(`/api/${endpoint}/`)
            .then((res) => {
                setResourceList({
                    results: res.data
                });
            }).catch((err) => {
                console.error(err)
            })
    }, [endpoint]);

    return {
        resourceList,
        getResourceList
    }
}