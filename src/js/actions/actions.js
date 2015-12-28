//分类管理
export const GET_CLASS = 'GET_CLASS';
export const ADD_CLASS = 'ADD_CLASS';
export const DEL_CLASS = 'DEL_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

export function getClass() {
    return {
        type: GET_CLASS
    }
}
export function addClass() {
    return {
        type: ADD_CLASS
    }
}
export function delClass(id) {
    return {
        type: DEL_CLASS,
        id
    }
}
export function editClass(id, name) {
    return {
        type: EDIT_CLASS,
        id,
        name
    }
}

