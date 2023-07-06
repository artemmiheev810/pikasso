import {useOneUserResponse} from "../../../service/useOneUserResponse";
import {usePostsResponse} from "../../../service/usePostsResponse";
import {useCommentsResponse} from "../../../service/useCommentsResponse";

export const useGetOnePost = (id?: string) => {
    const {data} = usePostsResponse(id)
    const post = data?.[0]

    const {data: user} = useOneUserResponse(post?.userId)
    const {data: comments} = useCommentsResponse(id)

    return {
        post,
        user,
        comments
    }

}