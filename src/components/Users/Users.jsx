import React from "react";
import {connect} from 'react-redux';
import './User.css';

export const Users = ({users, changeUserStatus}) => {

    const usersList = users.map(user => {
        return (
            <div
                className={'user'}
                key={user.id}
            >
                <div className={'user__content'}>
                    <div className={'user__row'}>
                        <div className={'user__col'}>
                            <div className="user__row">
                                <div className={'user__avatar'}>
                                    <img src={user.avatar} alt=""/>
                                </div>
                                <div className={'user__nickname'}>
                                    {user.nickname}
                                </div>
                            </div>

                        </div>
                        <div className={'user__col'}>
                            <div className="user__row">
                                <div className="user__status">
                                    {user.status ? 'online' : 'offline'}
                                </div>
                                <div className={'user__btn-sm'}>
                                    <button onClick={() => changeUserStatus(user.id)}>Edit status</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    });

    return (
        <div className={"users"}>
            {usersList}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserStatus: (userId) => dispatch({type: 'CHANGE_USER_STATUS', userID: userId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);