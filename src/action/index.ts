
export type POST_LOAD_LIST = "POST_LOAD_LIST";
import { IProps } from 'blg-post';

export enum typeAction {
  POST_LOAD_LIST = "POST_LOAD_LIST"
}

export interface IloadListPost {
  type: POST_LOAD_LIST,
  value: Array<IProps>
}
export function loadListPost(data: Array<IProps>): IloadListPost {
  return {
    type: typeAction.POST_LOAD_LIST,
    value: data
  }
}