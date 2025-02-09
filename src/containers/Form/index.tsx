import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, InputGlobal, MainContainer, Title } from '../../styles'
import { StyledForm } from './style'
import { addNewContact } from '../../store/reducers/contactsReducer'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      addNewContact({
        id: 9,
        name,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title> New Contact</Title>
      <StyledForm onSubmit={addContact}>
        <InputGlobal
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <InputGlobal
          className="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Phone"
          type="tel"
        />
        <InputGlobal
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <ButtonSave className="add" type="submit">
          Add
        </ButtonSave>
      </StyledForm>
    </MainContainer>
  )
}

export default Form
