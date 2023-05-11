import React, { Component } from 'react'

class Language extends Component {
    arrLanguages = [{ name: 'עברית', value: 'hebrew' }, { name: 'CapsLk', value: 'upper' }, { name: 'shift', value: 'lower' }, { name: 'מספרים', value: 'numbers' }]
    render() {
        return (
            <>
                {this.arrLanguages.map(language => (
                    <input key={language.name} className='btn lang' type="button" onClick={() => this.props.changeLanguage(language.value)} value={language.name} />
                ))} </>
        )
    }
}

export default Language
