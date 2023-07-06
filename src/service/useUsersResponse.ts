import {useQuery} from "@tanstack/react-query";
import {api, apiPath} from "./api";
import {User} from "../models/user";

export const useUsersResponse = (userId?: number ) => {
    const {isLoading, data} = useQuery<User[]>({
        queryKey: [apiPath.users, userId],
        queryFn: () =>
            fetch(`${api}/${apiPath.users}${userId ? '?id=' + userId : ''}`)
                .then(
                    (res) => res.json(),
                ),
    })
    return {data, total: data?.length ?? 0, isLoading}
}

