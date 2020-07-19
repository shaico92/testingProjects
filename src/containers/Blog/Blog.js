import React, { Component } from 'react';
// import axios from 'axios';


import {Route, NavLink} from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'
import FullPost from './FullPost/FullPost'
import './Blog.css';

class Blog extends Component {


   

 
    render () {
 

        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to='/' 
                            exact 
                            href='/'
                            activeClassName='my-shai'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname : '/newPost',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }} 
                            activeClassName='my-shai'
                            href='/newPost'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact  component={Posts}/>
                <Route path='/newPost'   component={NewPost}/>
                <Route path='/:id' exact  component={FullPost}/>
                
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