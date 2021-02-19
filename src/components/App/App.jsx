import React from "react";
import './App.css';
import User from "../User";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 0,
                    nickname: "Kate",
                    online: true,
                    posts: [
                        {
                            id: 0,
                            title: 'First title',
                            like: false,
                            picture: 'http://via.placeholder.com/660x600'
                        },
                        {
                            id: 1,
                            title: 'Last title',
                            like: true,
                            picture: 'http://via.placeholder.com/660x600'
                        }
                    ],
                }
            ]
        };

        this.changeLikeStatus = (postId, userId) => {
            this.setState(state => {
                return {
                    users: state.users.map(user => {
                        return user.id === userId ? {
                            ...user,
                            posts: user.posts.map(post => post.id === postId ? {...post, like: !post.like} : post)
                        } : user;
                    })
                }
            })
        }
    }

    render() {
        const {users} = this.state;
        const usersList = [...users].map(user => {
            return (
                <User
                    userId={user.id}
                    posts={user.posts}
                    key={user.id}
                    changeLikeStatus={this.changeLikeStatus}
                />
            )
        });

        return (
            <div className={'user'}>
                {usersList}
            </div>
        );
    }

}
