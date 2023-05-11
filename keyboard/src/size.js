import React, { Component } from 'react'

class Size extends Component {
    arrSizes = ['11', '12', '14','16','18','20','22','26','30'] 
    render() {
        return (
            <div>
                {this.arrSizes.map(size => (
                    <input key={size} type="button" className='btn size' onClick={() => this.props.changeSize(size)} value={size} />
                    ))} </div>
        )
    }
}

export default Size
