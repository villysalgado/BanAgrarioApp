import React, { Component } from 'react'
import axios from 'axios'


export default class ActiveCredits extends Component {

    state = {
        credits: []
    }
    
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/credits');
        this.setState({
            credits: res.data
        });
        console.log(res.data)
        
    }


    render() {
        return (
            <div className="container">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">USUARIO</th>
                            <th scope="col">CREDITO TOTAL</th>
                            <th scope="col">CREDITO RESTANTE</th>
                            <th scope="col">VALOR CUOTAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            this.state.credits.map(credit => (
                                <tr key={credit._id}>
                                    <th  scope="row">{credit.extUserName}</th>
                                    <td>{credit.totalCreditAmount}</td>
                                    <td>{credit.leftCreditAmount}</td>
                                    <td>{}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
