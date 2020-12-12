import React from 'react'
import { GET_PEOPLE_BOATS } from '../../queries'
import { useQuery } from '@apollo/client'

const PersonWithBoats = ({ display, id }) => {

    const styles = ({
        container: {
            display: display,
            position: 'relative',
            top: '20px',
        },
        list: {
            listStyleType: 'none',
            display: 'grid',
            gap: '10px',
            padding: '10px'
        },
        child: {
            border: 'solid 1px',
            padding:'10px'
        },
        grey: {
            color: 'grey'
        }
    })

    const { loading, error, data } = useQuery(GET_PEOPLE_BOATS, { variables: { personId: id } })

    if (loading) return 'loading...'
    if (error) return `Errror! ${error.message}`
    return (
        <div style={styles.container}>
            <h2>Boats</h2>
            <ul style={styles.list}>
                {
                    data.personWithboats.map(item => {
                        return <li style={styles.child}> <span style={styles.grey}>Model:</span> {item.model}, <span style={styles.grey}>Year:</span> {item.year}, <span style={styles.grey}>Price:</span> ${item.price}, <span style={styles.grey}>Make:</span>{item.make}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PersonWithBoats;