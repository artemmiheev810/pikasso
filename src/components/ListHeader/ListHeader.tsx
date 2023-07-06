import React, {FC} from 'react';
import {Select} from '../Select/Select';
import {useUsersResponse} from "../../service/useUsersResponse";
import {selectList} from "../../utils/selectList";

import style from './ListHeader.module.scss'

interface ListHeaderProps {
    total: number,
    onUserSelect: (id: number) => void
}

const ListHeader: FC<ListHeaderProps> = ({total, onUserSelect}) => {
    const {data, isLoading} = useUsersResponse()
    const options = selectList({data, label: 'name', additionalValuse: [{value: '', label: 'Все пользователи'}]})
    return (
        <div className={style.wrap}>
            <div>
                Кол-во постов: {total}
            </div>
            <Select
                onSelect={(value) => onUserSelect(value)}
                placeholder={'Выберите пользователя'}
                loading={isLoading}
                options={options}
            />
        </div>
    );
};

export default ListHeader;