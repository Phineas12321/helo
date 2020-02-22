import React from 'react'
import './dashboard.css'

class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='dash-every'>
                <section className='dash-top'>
                    <div>
                        <input className='dash-input' placeholder='Search by Title' />
                        <button>Search</button>
                        <button>Reset</button>
                    </div>
                    <div>
                        My Posts
                        <input className='dash-check' type='checkbox' />
                    </div>
                </section>
                <section className='dash-posts'>
                    
                </section>
            </div>
        )
    }
}

export default Dashboard