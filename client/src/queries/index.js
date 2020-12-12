import { gql } from '@apollo/client'

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`

export const GET_BOATS = gql`
  query PersonWithBoats($personId: String!) {
    personWithboats (personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_PERSON = gql`
  mutation UpdatePerson($id: String!, $firstName: String!, $lastName: String!) {
    updatePerson(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_PERSON = gql`
  mutation RemovePerson($id: String!) {
    removePerson(id: $id) {
      id
      firstName
      lastName
    }
  }
`


export const ADD_BOATS = gql`
  mutation AddBoats($id: String!, $year: String!, $make: String!, $model: String!, $price: String!, , $personId: String!) {
    addBoats(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`

export const REMOVE_BOAT = gql`
  mutation RemoveBoat($id: String!) {
    removeboat(id: $id) {
      id
      year
      make
      model
      price
      personId
    }
  }
`

export const REMOVE_ALL_BOATS_WITH_PERSON = gql`
  mutation RemoveAllBoatsWithPerson($personId: String!) {
    removeAllBoatsWithPerson(personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`