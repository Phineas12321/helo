import React from 'react'
import './post.css'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {post_id, title, content, img} = this.props.post
        return(
            <div className='post-box'>
                <section>
                    <button onClick={()=>{this.props.handleDeletePost(post_id)}} >delete</button>
                </section>
                <section className='post-title'>
                    <p className='post-title-text'>{title}</p>
                </section>
                <section className='post-content' >
                    <p  >{content} </p>
                    {/* <p>{`by ${this.props.users.name}`}</p>
                    <img className='post-profile-pic' src={this.props.users.profile_pic} /> */}
                </section>
                <section>
                    <img className='post-img' src={img} />
                </section>
            </div>
        )
    }
}

export default Post