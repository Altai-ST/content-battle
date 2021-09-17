export const ADD_USER = 'ADD_USER';
export const CHECK_USER = 'CHECK_USER'
export const DELETE_CHECK = 'DELETE_CHECK'
export const NEW_BATTLE = 'NEW_BATTLE'
export const NEW_BATTLE2 = 'NEW_BATTLE2'

export const AddUser = (user)=>({
    type: ADD_USER,
    payload: user,
})

export const CheckUser =(check)=>({
    type: CHECK_USER,
    check,
})

export const DeleteCheck = (id)=>({
    type: DELETE_CHECK,
    id,
})

export const NewBattle = ()=>({
    type: NEW_BATTLE,
})

export const NewBattle2 = ()=>({
    type: NEW_BATTLE2,
})