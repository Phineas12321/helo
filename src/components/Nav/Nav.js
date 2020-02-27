import React from 'react'
import './nav.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../ducks/reducer'
import Axios from 'axios'

class Nav extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    logout = () => {
        Axios.post('/api/logout').then(res => {
            this.props.logout()
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <div className='nav-bar'>
                <section>
                    <div>
                        <img className='nav-pic' src={this.props.user.profile_pic} alt=''/>
                        <div>{this.props.user.username} </div>
                    </div>
                    <div className='nav-dash-post'>
                        <Link to='/dashboard'><button>Dashboard</button></Link>
                        <Link to='/new'><button>New Post</button></Link>
                    </div>
                </section>
                <section>
                    <button onClick={this.logout} >Logout</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps, {logout})(Nav))