import React from 'react'
import { GET_BOATS } from '../../queries'
import { useQuery } from '@apollo/client'

const PersonWithBoats = ({ display, id }) => {

    const { loading, error, data } = useQuery(GET_BOATS, { variables: { personId: id } })

    if (loading) return 'loading...'
    if (error) return `Errror! ${error.message}`

    if (display == 'block') {

        return (
            <div style={myStyles.container}>
                <h2>Boats</h2>
                <ul style={myStyles.list}>
                    {
                        data.personWithboats.map(item => {
                            return (
                                <li style={myStyles.child}> 
                                    Model: {item.model}, 
                                    Year: {item.year}, 
                                    Price: ${item.price}, 
                                    Make: {item.make}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default PersonWithBoats;


const myStyles = ({
    container: {
        marginTop: '20px'
    },
    list: {
        listStyleType: 'none',
        display: 'grid',
        gap: '1rem',
        padding: '1rem'
    },
    child: {
        border: 'solid 1px grey',
        padding:'0.5rem'
    }
})