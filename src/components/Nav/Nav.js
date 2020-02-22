import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='nav-bar'>
                {console.log(this.props)}
                <section>
                    <div>
                        <img className='nav-pic' src={this.props.user.profile_pic} />
                        <div>{this.props.user.username} </div>
                    </div>
                    <div className='nav-dash-post'>
                        <Link to='/dashboard'><button>Dashboard</button></Link>
                        <Link to='/new'><button>New Post</button></Link>
                    </div>
                </section>
                <section>
                    <Link to='/'><button>Logout</button></Link>
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(Nav)