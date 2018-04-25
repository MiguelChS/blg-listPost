import { IProps } from 'blg-post';
import { IloadListPost, typeAction } from '../action';


export function reducer(state: Array<IProps> = [], action: IloadListPost) {
  switch (action.type) {
    case typeAction.POST_LOAD_LIST: {
      return { ...state, listPost: action.value }
    }
    default: {
      return state;
    }
  }
}