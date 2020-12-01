import React, { Component } from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

class Client extends Component {
    render() {
        const clients = [
            {id:1, firstName:"gulshan",lastName:"yadav", email:"gulshany01@gmail.com",phone:"123",balance:"20"}
        ]

        if(clients){
            return (
                <div>
                    
                </div>
            )

        }
        else{
            return <h1>Loading...</h1>
        }
        
    }
}

export default Client;