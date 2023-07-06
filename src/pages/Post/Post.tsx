import React from 'react';
import {useParams} from "react-router-dom";
import {Button, Divider, Form, Input, List} from "antd";
import {useGetOnePost} from "./hooks/useGetOnePost";
import Comment from "../../components/Comment/Comment";
import {useSetComment} from "../../service/useSetComment";
import TextArea from "antd/es/input/TextArea";
import {useForm} from "antd/es/form/Form";

import style from './Post.module.scss'

const Post = () => {
    const {id} = useParams()
    const [form] = useForm()
    const {post, user, comments} = useGetOnePost(id)
    const {newComment} = useSetComment(form.resetFields)

    return (
        <>
            <div className={style.wrap}>
                <div>
                    <Divider orientation="left">{post?.title}</Divider>
                    <div className={style.body}>{post?.body}</div>
                </div>

                <div>
                    <h4 className={style.head}>User:</h4>
                    <div>{user?.name}</div>
                    <div>{user?.phone}</div>
                    <div>{user?.email}</div>
                    <div>{user?.company.name}</div>
                </div>
            </div>
            <div className={style.wrap}>
                <List
                    loading={!comments}
                    size="large"
                    header={<h4 className={style.head}>Comments</h4>}
                    bordered
                    dataSource={comments ?? []}
                    renderItem={Comment}
                />
                <Form
                    form={form}
                    layout={'vertical'}
                    onFinish={(val) => {
                        newComment.mutate({...val, postId: Number(id)})
                    }}
                >
                    <Form.Item rules={[{required: true, message: 'Нужно заполнить'}]} label={'Имя'} name={'name'}>
                        <Input/>
                    </Form.Item>
                    <Form.Item rules={[{required: true, message: 'Нужно заполнить'}]} label={'E-mail'} name={'email'}>
                        <Input/>
                    </Form.Item>
                    <Form.Item rules={[{required: true, message: 'Нужно заполнить'}]} label={'Комментарий'}
                               name={'body'}>
                        <TextArea/>
                    </Form.Item>
                    <Button htmlType={'submit'}>Отправить</Button>
                </Form>
            </div>
        </>
    );
};

export default Post;