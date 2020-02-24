import React from 'react'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {post_id, title} = this.props.posts
        console.log(this.props)
        return(
            <div className='post-box'>
                <section>
                    <h1>{this.props.posts.title}</h1>
                </section>
                <section>
                    <p>{`by ${this.props.users.name}`}</p>
                    <img className='post-profile-pic' src={this.props.users.profile_pic} />
                </section>
            </div>
        )
    }
}

export default Post