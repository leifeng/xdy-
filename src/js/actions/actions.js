require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'


//分类管理
export const GET_CLASS_ALL = 'GET_CLASS_ALL';
export const ADD_CLASS = 'ADD_CLASS';
export const DEL_CLASS = 'DEL_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';

//ui
export const IS_EDIT = 'IS_EDIT';
export const ClASS_ID = 'ClASS_ID';

export function A_getClassAll(list) {
    return {
        type: GET_CLASS_ALL,
        list
    }
}

export function A_getAsyncClassAll() {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=getAllClass')
            .then(response => response.json())
            .then(json => dispatch(A_getClassAll(json.className)))
    };
}
export function A_getAsyncClass() {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=getEnableClass')
            .then(response => response.json())
            .then(json => {
                dispatch(A_getClassAll(json.className))
            }
        )
    };
}

export function A_addClass_async(name) {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=addClass', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=' + name

        }).then(response => response.json()).then(() => {
            dispatch(A_getAsyncClass());
        });
    };
}


export function A_delClass_async(id) {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=delClass', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=' + id
        }).then(response => response.json()).then(() => {
            dispatch(A_getAsyncClass());
        });
    };
}
export function A_reDelClass_async(id) {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=reDelClass', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=' + id
        }).then(response => response.json()).then(() => {
            dispatch(A_getAsyncClass());
        });
    };
}

export function A_editClass_async(name) {
    return (dispatch, getState)=> {
        return fetch('../Handler.ashx?type=editClass', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=' + getState().classManage.R_classId + '&name=' + encodeURIComponent(name)

        }).then((res) => {
            dispatch(A_setIsEdit(false));
            dispatch(A_getAsyncClass());
        });
    };
}

export function A_setIsEdit(isEdit) {
    return {
        type: IS_EDIT,
        isEdit
    }
}
export function A_setClassId(id) {
    return {
        type: ClASS_ID,
        id
    }
}


//list

export const ADD_LIST = 'ADD_LIST';
export const GET_LIST = 'GET_LIST';
export const GET_LIST_CLASS = 'GET_LIST_CLASS';
export const GET_CLASS_ID = 'GET_CLASS_ID';
export const LIST_IS_EDIT = 'LIST_IS_EDIT';

export function A_listIsEdit(isEdit) {
    return {
        type: LIST_IS_EDIT,
        isEdit
    }
}
export function A_getList(list) {
    return {
        type: GET_LIST,
        list
    }
}
export function A_getListForClass(list) {
    return {
        type: GET_LIST_CLASS,
        list
    }
}
export function A_getClassId(classId) {
    return {
        type: GET_CLASS_ID,
        classId
    }
}
export function A_getListAsync() {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=getList').
            then((res)=>res.json()).then((json)=>dispatch(A_getList(json.list)))
    }
}
export function A_getListForClassAsync(classid) {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=getListForClass&classid=' + classid).then((res)=>res.json()).then((json)=>dispatch(A_getListForClass(json.list)))
    }
}
export function A_addListAsync(name, classid, url) {
    return (dispatch)=> {
        return fetch('../Handler.ashx?type=addList', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=' + name + '&classid=' + classid + '&url=' + url
        }).then(res=>res.json()).then(json=>dispatch(A_getListAsync()));
    }
}
export function A_delListAsync(listid) {
    return dispatch=> {
        return fetch('../Handler.ashx?type=delList', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'listid=' + listid
        }).then(res=>res.json()).then(json=>dispatch(A_getListAsync()));
    }
}
export function A_editListAsync(listid, name, classid, url) {
    return dispatch=> {
        return fetch('../Handler.ashx?type=editList', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'listid=' + listid + '&name=' + name + '&classid=' + classid + '&url=' + url
        }).then(res=>res.json()).then(json=> {
            dispatch(A_listIsEdit(false));
            dispatch(A_getListAsync());
        });
    }
}


//info
export const GET_INFO = 'GET_INFO';
export function A_getInfo(link) {
    return {
        type: GET_INFO,
        link
    }
}
export function A_getInfoAsync(listid) {
    return dispatch=> {
        return fetch('Handler.ashx?type=getInfo&listid=' + listid).
            then(res=>res.json()).then(json=> {
                if (json.flag === 1) {
                    dispatch(A_getInfo(json.data))
                }
            }
        );
    }
}