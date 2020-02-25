import React from 'react'
import './post.css'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {post_id, title} = this.props.post
        return(
            <div className='post-box'>
                <section className='post-title'>
                    <p className='post-title-text'>{title}</p>
                </section>
                <section>
                    {/* <p>{`by ${this.props.users.name}`}</p>
                    <img className='post-profile-pic' src={this.props.users.profile_pic} /> */}
                </section>
            </div>
        )
    }
}

export default Post