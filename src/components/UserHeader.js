import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

class UserHeader extends React.Component {

    render() {
        const {user} = this.props;
        if(!user) return null;
        return(
            <div className="header">{user.name}</div>
        )
    }
}

const mapSateToProps = (state,ownProps) => {
    return {
        user: state.users.find(
            user=>user.id===ownProps.userId)
    }
}

export default connect(mapSateToProps)(UserHeader);