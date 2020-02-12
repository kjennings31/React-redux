import React, { Component } from 'react'






 class Posts extends Component {
//implementing below into component state
// constructor that takes param props
//super props? 
//this.state??
constructor(props) {
    super(props);
    this.state = {
        //empty array that will be filled with values from below fetch
        posts: []
    }
}
    // this on its on wont show anything..need to add to render

     // lifecycle method
     //used to be named consoleWillMount .. now named 
     UNSAFE_componentWillMount() {
        //fetch api
        fetch('https://jsonplaceholder.typicode.com/posts')
        //result that maps to json
        .then(res => res.json())
        //gives the data
        //.then(data => console.log(data))
        .then(data => this.setState({posts: data}))
        .then(data => console.log('posts'));
        //defualt to log 100 post 
        // will be placed in component state untitl redux which
        //then it will placed in the application state
     }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key ={post.id}>
                <h3>{post.id}</h3>
                <h3> {post.title}</h3>
                <p>{post.body}</p>

            </div>


        ))
        return (
            <div>
                <h1>post</h1> 
                {postItems}
            </div>
        );
    }
}


export default Posts; 