import React, { useState } from 'react'
import { Card, List } from 'antd'

import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import UpdatePerson from '../forms/UpdatePerson'
import RemovePerson from '../buttons/RemovePerson'

import PersonsBoats from '../layout/personsBoats'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Person = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)
  const styles = getStyles()

  const handleButtonClick = () => setEditMode(!editMode)

  const [display, setDisplay] = useState('none')


  const fullName = () => {
    return `${props.firstName} ${props.lastName}`
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }

  

  const handleInfoClick = () => {
    display == 'none' ? setDisplay('block') : setDisplay('none')
  }

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdatePerson
          id={id}
          firstName={firstName}
          lastName={lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemovePerson id={id} firstName={firstName} lastName={lastName} />
          ]}
          style={styles.card}
        >
          <h2>{fullName()}</h2>
            <InfoCircleOutlined style={{position:'relative'}} key='info' onClick={handleInfoClick} />
            <PersonsBoats id={id} display={display} />
        </Card>
      )}
    </List.Item>
  )
}

export default Person
