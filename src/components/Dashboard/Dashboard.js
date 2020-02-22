import React from 'react'
import './dashboard.css'

class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            search: '',
            mine: true
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
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

    render(){
        return(
            <div className='dash-every'>
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
                    
                </section>
            </div>
        )
    }
}

export default Dashboard