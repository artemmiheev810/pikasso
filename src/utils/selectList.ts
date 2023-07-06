import {DefaultOptionType} from "antd/es/select"

interface SelectList<T, K> {
    data?: (T & { id: number })[]
    label: K,
    additionalValuse?: DefaultOptionType[]
}

export const selectList = <T, K extends keyof T>({
                                                     data,
                                                     label,
                                                     additionalValuse = []
                                                 }: SelectList<T, K>) => {
    return data ? [
        ...additionalValuse,
        ...data?.map((el) => ({
            value: el.id,
            label: el[label]
        }))
    ] : []
}

