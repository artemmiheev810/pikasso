import {useQuery} from "@tanstack/react-query";
import {api, apiPath} from "./api";
import post from "../pages/Post/Post";
import {Comment} from "../models/Comment";

export const useCommentsResponse = (postId?: string)=> {
    const {isLoading, data} = useQuery<Comment[]>({
        queryKey: [apiPath.comments, postId],
        queryFn: () =>
            fetch(`${api}/${apiPath.comments}${postId ? '?postId=' + postId : ''}`)
                .then(
                    (res) => res.json(),
                ),
        enabled :!!post
    })
    return {data, total: data?.length ?? 0, isLoading}
}