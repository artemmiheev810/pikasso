import {useQuery} from "@tanstack/react-query"
import {api, apiPath} from "./api";
import {Post} from "../models/post";
import {useState} from "react";


export const usePostsResponse = (id?: string) => {
    const [userId, setUserId] = useState<number | undefined>()

    const getUserPost = (userId: number) => {
        setUserId(userId)
    }
    const {isLoading, data} = useQuery<Post[]>({
        queryKey: [apiPath.posts, userId],
        queryFn: () => {

            return fetch(`${api}/${apiPath.posts}${id ? '?id='+ id : ''}${userId ? '?userId=' + userId : ''} `).then(
                (res) => res.json(),
            )
        },
    })
    return {data, total: data?.length ?? 0,  isLoading, getUserPost}
}
