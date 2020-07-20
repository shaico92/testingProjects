

import React, {Component} from 'react';

//import {Link} from 'react-router-dom'

import axios from '../../../axios'
import {Route} from 'react-router-dom'

import  './Posts.css';

import Post from '../../../components/Post/Post'

import FullPost from '../FullPost/FullPost'

class Posts extends Component{
    state = {
        posts: [],
     
    }
    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname : '/posts/'+id})
        
    }

    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return(
                    <Post  
                key={post.id}  
                
                    
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} >

                    </Post>

                //  <Link className='Link'
                // key={post.id}  to ={'/'+post.id}>
                // <Post 
                    
                //     title={post.title} 
                //     author={post.author}
                //     clicked={() => this.postSelectedHandler(post.id)} /></Link>
                )
            });
        }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>

                <Route path='/posts/:id' exact   component={FullPost}/>

            </div>
            
                


        )



    }


}

export default Posts;