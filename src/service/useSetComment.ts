import {useMutation} from "@tanstack/react-query";
import {message} from "antd";
import {queryClient} from "../App";
import {api, apiPath} from "./api";
import {Comment} from "../models/Comment";

export const useSetComment = (resetForm: ()=>void) => {
     const newComment = useMutation({
        mutationFn: (body: Comment) => {
            return fetch(`${api}/${apiPath.comments}`, {
                body: JSON.stringify(body),
                method: 'POST'
            }).then(()=>{
                message.success('Комментарий добавлен!')
                queryClient.invalidateQueries([apiPath.comments])
                resetForm()
            })
        },
    })
    return {
         newComment
    }
}