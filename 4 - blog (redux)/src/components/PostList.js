import React from 'react';

import UserHeader from './userHeader';

// redux
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPostsAndUsers(); 
    }

    // mostramos los datos de la respuesta de la api
    renderList(){
        const {posts} = this.props;
        if(!posts) return null;

        return posts.map(post => {
            return (
              <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                  <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                  <UserHeader userId={post.userId}/>
                </div>
              </div>
            );
        });
    }

    render(){
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect (mapStateToProps, {fetchPostsAndUsers})(PostList);