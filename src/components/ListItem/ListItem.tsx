import {List} from "antd";
import {Post} from "../../models/post";
import {FC} from "react";
import {Link} from "react-router-dom";

const ListItem: FC<Post> = ({body, title, id}) => {
    return (
        <List.Item>
            <div>
                <div>
                    <Link to={`/post/${id}`}>
                        <div>{title}</div>
                    </Link>
                </div>
                <div>{body}</div>
            </div>
        </List.Item>
    )
};

export default ListItem;