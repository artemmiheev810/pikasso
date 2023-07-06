import {useQuery} from "@tanstack/react-query";
import {User} from "../models/user";
import {api, apiPath} from "./api";

export const useOneUserResponse = (id?: number ) => {
    const { data} = useQuery<User[]>({
        queryKey: [id],
        queryFn: () =>
            fetch(`${api}/${apiPath.users}?id=${id}`)
                .then(
                    (res) => res.json(),
                ),
    })
    return {data: data?.[0]}
}