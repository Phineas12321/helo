import React from 'react'
import './post.css'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: this.props.post.title,
            canEditTitle: false
        }
    }

    toggleEditTitle = () => {
        this.setState({ canEditTitle: !this.state.canEditTitle });
    }

    saveTitle = () => {
        this.props.handleEditTitle(this.props.post.post_id, this.state.title)
        this.toggleEditTitle()
    }

    render(){
        const {post_id, title, content, img} = this.props.post
        return(
            <div className='post-box'>
                <section>
                    <button onClick={()=>{this.props.handleDeletePost(post_id)}} >delete</button>
                </section>
                <section className='post-title'>
                    
                    {this.state.canEditTitle ? (
                        <div>
                            <input
                            maxLength='45'
                            value={this.state.title}
                            onChange={e => {
                                this.setState({ title: e.target.value })
                            }}
                            />
                            <button onClick={this.saveTitle}>Save</button>
                        </div>
                        ) : (
                        <div>
                            {/* <li>{this.props.element}</li>
                            <button onClick={this.toggleEditTitle}>Edit</button> */}

                            <p className='post-title-text' onDoubleClick={this.toggleEditTitle} >{title}</p>
                        </div>
                        )}
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