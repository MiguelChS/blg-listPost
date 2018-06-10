export declare type POST_LOAD_LIST = "POST_LOAD_LIST";
import { IProps } from 'blg-post';
export declare enum typeAction {
    POST_LOAD_LIST = "POST_LOAD_LIST"
}
export interface IloadListPost {
    type: POST_LOAD_LIST;
    value: Array<IProps>;
}
export declare function loadListPost(data: Array<IProps>): IloadListPost;
