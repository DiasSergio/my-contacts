import { RootReducer } from '../../store'

import Contact from '../../components/Contact'

import { useSelector } from 'react-redux'
import { MainContainer, Title } from '../../styles'

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  const { termo } = useSelector((state: RootReducer) => state.filters)

  const filterTasks = () => {
    let filteredTasks = contacts

    if (termo !== undefined) {
      filteredTasks = contacts.filter(
        (c) => c.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return filteredTasks
    } else return filteredTasks
  }

  const showFilteredResults = (quantity: number) => {
    const message =
      termo !== undefined && termo.length > 0
        ? `${quantity} Contact(s) tagged as: "${termo}"`
        : `${quantity} Contact(s) tagged as: all`

    return message
  }

  const contactsFiltered = filterTasks()
  const message = showFilteredResults(contactsFiltered.length)

  return (
    <MainContainer>
      <Title as={'p'}>{message}</Title>
      <ul>
        {filterTasks().map((c) => (
          <li key={c.name}>
            <Contact id={c.id} name={c.name} tel={c.tel} email={c.email} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
