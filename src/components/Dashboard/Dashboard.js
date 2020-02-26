import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './dashboard.css'
import Post from '../Post/Post'

class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            search: '',
            mine: true
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleGetPosts = this.handleGetPosts.bind(this)
        this.handleDeletePost = this.handleDeletePost.bind(this)
        this.handleEditTitle = this.handleEditTitle.bind(this)
        this.handleEditContent = this.handleEditContent.bind(this)
    }

    componentDidMount(){
        this.handleGetPosts()
    }

    handleInput(e){
        this.setState({
            search: e.target.value
        })
    }

    handleCheck(){
        this.setState({
            mine: !this.state.mine
        })
    }

    handleGetPosts(){
        axios.get(`/api/posts`).then(res=> {
            this.setState({posts: res.data})
        }).catch(err => console.log(`an error happened ${err}`))
    }

    handleDeletePost(post_id){
        axios.delete(`/api/posts/${post_id}`).then(()=>{
            this.handleGetPosts()
        }).catch(err => console.log(`there was an error, bud.   ${err}`))
    }

    handleEditTitle(post_id, title){
        axios.put(`/api/title/${post_id}`, {title}).then(()=>{
            this.handleGetPosts()
        }).catch(err => console.log(`error error ${err}`))
    }

    handleEditContent(post_id, content){
        axios.put(`/api/content/${post_id}`, {content}).then(()=>{
            this.handleGetPosts()
        }).catch(err => console.log(`oh no, an error ${err}`))
    }

    render(){
        const mappedPosts = this.state.posts.map((e, i) => {
            return (
                <Post
                    key = {i}
                    post = {e}
                    handleDeletePost = {this.handleDeletePost}
                    handleEditTitle = {this.handleEditTitle}
                    handleEditContent = {this.handleEditContent}
                />
            )
        })
        return(
            <div className='dash-every'>
                <div>
                    <section className='dash-top'>
                        <div>
                            <input className='dash-input' placeholder='Search by Title' onChange={e => this.handleInput(e)} />
                            <button>Search</button>
                            <button>Reset</button>
                        </div>
                        <div>
                            My Posts
                            <input className='dash-check' type='checkbox' onClick={this.handleCheck} defaultChecked/>
                        </div>
                    </section>
                    <section className='dash-posts'>
                        <div>
                            {mappedPosts}
                        </div>
                        
                    </section>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(Dashboard)