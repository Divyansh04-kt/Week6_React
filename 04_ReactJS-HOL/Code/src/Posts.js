import React from 'react';
import Post from './Post';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
    }

    loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            const postList = data.map((post) => new Post(post.id, post.title, post.body));
            this.setState({posts: postList});
        });
    }

    componentDidMount(){
        this.loadPosts();
    }

    componentDidCatch(error, info){
        alert("An error occured in the Posts component!");
        console.error("Error caught in componentDidCatch:", error, info);
    }

    render(){
        return (
            <div style = {{ padding: '20px'}}>
                <h1>Blog Posts</h1>
                {this.state.posts.map((post) => (
                    <div key = {post.id} style={{marginBottom: '20px'}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;