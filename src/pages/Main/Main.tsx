import React from 'react';
import {List} from "antd";
import {usePostsResponse} from "../../service/usePostsResponse";
import ListItem from "../../components/ListItem/ListItem";
import ListHeader from "../../components/ListHeader/ListHeader";

const Main = () => {
    const {data, total, isLoading, getUserPost} = usePostsResponse()
    return (
        <div>
            <List
                loading={isLoading}
                size="large"
                header={<ListHeader onUserSelect={getUserPost}  total={total}/>}
                footer={<div>Кол-во постов: {total}</div>}
                bordered
                dataSource={ data}
                renderItem={ListItem}
            />
        </div>
    );
};

export default Main;