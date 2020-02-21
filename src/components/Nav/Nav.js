import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='nav-bar'>
                <section>
                    <div>
                        <div>pic</div>
                        <div>name</div>
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

export default Nav