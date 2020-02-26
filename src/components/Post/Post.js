import React from 'react'
import './post.css'

class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: this.props.post.title,
            canEditTitle: false,
            content: this.props.post.content,
            canEditContent: false,
            img: this.props.post.img,
            canEditImg: false
        }
    }

    toggleEditTitle = () => {
        this.setState({ canEditTitle: !this.state.canEditTitle });
    }

    saveTitle = () => {
        this.props.handleEditTitle(this.props.post.post_id, this.state.title)
        this.toggleEditTitle()
    }


    toggleEditContent = () => {
        this.setState({ canEditContent: !this.state.canEditContent });
    }

    saveContent = () => {
        this.props.handleEditContent(this.props.post.post_id, this.state.content)
        this.toggleEditContent()
    }


    toggleEditImg = () => {
        this.setState({ canEditImg: !this.state.canEditImg });
    }

    saveImg = () => {
        this.props.handleEditImg(this.props.post.post_id, this.state.img)
        this.toggleEditImg()
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
                            <p className='post-title-text' onDoubleClick={this.toggleEditTitle} >{title}</p>
                        </div>
                        )}
                </section>
                <section className='post-content' >
                    {this.state.canEditContent ? (
                        <div>
                            <input
                            value={this.state.content}
                            onChange={e => {
                                this.setState({ content: e.target.value })
                            }}
                            />
                            <button onClick={this.saveContent}>Save</button>
                        </div>
                        ) : (
                        <div>
                            <p onDoubleClick={this.toggleEditContent} >{content}</p>
                        </div>
                        )}
                </section>
                <section>
                    {/* <img className='post-img' src={img} /> */}
                    {this.state.canEditImg ? (
                        <div>
                            <input
                            value={this.state.img}
                            onChange={e => {
                                this.setState({ img: e.target.value })
                            }}
                            />
                            <button onClick={this.saveImg}>Save</button>
                        </div>
                        ) : (
                        <div>
                            <img className='post-img' src={img} onDoubleClick={this.toggleEditImg} />
                        </div>
                        )}
                </section>
            </div>
        )
    }
}

export default Post