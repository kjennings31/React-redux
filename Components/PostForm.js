import React, { Component } from 'react'

class PostForm extends Component {
    //implementing below into component state
    // constructor that takes param props
    //super props? 
    //this.state??
    constructor(props) {
        super(props);
        this.state = {

            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {

        //this method avoids having to create seperate functions for each one
        //grabs name with e.target.name and sets to value in the form
        this.setState({[e.target.name]: e.target.value});


    }
        // this on its on wont show anything..need to add to render
    
         // lifecycle method
         //used to be named consoleWillMount .. now named 
         
        render() {
            return (
                <div>
                    <h1>add Post</h1>
                    <form>
                        <div>
                           <label>Title:</label><br/> 
                           <input type = "text" name="title" onChange={this.onChange}
                           value = {this.state.title} />
                        </div>
                        <div>
                           <label>Body:</label><br/> 
                           <br/>
                            <textarea name = "body" onChange={this.onChange}
                             value = {this.state.body}/>
                        </div>
                        <br/>
                            <button type ="Submit">Submit</button>
                    </form> 
                 
                </div>
            );
        }
    }





export default PostForm