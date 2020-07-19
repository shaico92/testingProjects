import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import {Route} from 'react-router-dom'

import Posts from './Posts/Posts'
import './Blog.css';

class Blog extends Component {


   

 
    render () {
 

        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/newPost'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact  component={Posts}/>
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;