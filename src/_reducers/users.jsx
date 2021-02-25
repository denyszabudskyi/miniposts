const CHANGE_USER_STATUS = 'CHANGE_USER_STATUS';

const initialState = [
    {
        id: 10,
        avatar: '',
        nickname: 'Elena',
        status: true
    },
    {
        id: 11,
        avatar: '',
        nickname: 'Sonya',
        status: false
    },
    {
        id: 12,
        avatar: '',
        nickname: 'Ira',
        status: false
    }
];

export const users = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_STATUS:
            return [
                ...state.map(user => user.id === action.userID ? {...user, status: !user.status} : user)
            ]
        default:
            return state
    }
}