import {Select as AntSelect, SelectProps} from 'antd'
import {FC} from "react";
import {concatClass} from "../../utils/concatClass";
import style from './Select.module.scss'
export const Select: FC<SelectProps> = ({...props}) => {
    return <AntSelect {...props} className={concatClass(style.select, props.className)}/>
}