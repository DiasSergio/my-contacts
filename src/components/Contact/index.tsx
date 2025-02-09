import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remove, edit } from '../../store/reducers/contactsReducer'
import ContactClass from '../../models/Task'
import { Button, ButtonSave } from '../../styles'

type Props = ContactClass

const Contact = ({
  id,
  name,
  tel: initialPhone,
  email: initialEmail
}: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (initialPhone.length > 0) {
      setTel(initialPhone)
    }
  }, [initialPhone])

  useEffect(() => {
    if (initialEmail.length > 0) {
      setEmail(initialEmail)
    }
  }, [initialEmail])

  function cancelEditting() {
    setIsEditing(false)
    setTel(initialPhone)
    setEmail(initialEmail)
  }

  function saveEditting() {
    dispatch(
      edit({
        id,
        name,
        tel,
        email
      })
    )
    setIsEditing(false)
  }

  return (
    <S.Card>
      <label htmlFor={name}>
        <S.Title>
          {isEditing && <em>Editting:</em>}
          {name}
        </S.Title>
      </label>
      <S.Description
        disabled={!isEditing}
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <S.Description
        disabled={!isEditing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.ActionsBar>
        {isEditing ? (
          <>
            <ButtonSave onClick={saveEditting}>Save</ButtonSave>
            <S.ButtonCancelRemove onClick={cancelEditting}>
              Cancel
            </S.ButtonCancelRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <S.ButtonCancelRemove onClick={() => dispatch(remove(id))}>
              Delete
            </S.ButtonCancelRemove>
          </>
        )}
      </S.ActionsBar>
    </S.Card>
  )
}

export default Contact
