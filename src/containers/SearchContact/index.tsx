import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { changeTermo } from '../../store/reducers/filter'

import * as S from './styles'
import { InputGlobal } from '../../styles'

const SearchContact = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filters)

  return (
    <S.Aside>
      <InputGlobal
        type="text"
        placeholder="Search"
        value={termo}
        onChange={(e) => dispatch(changeTermo(e.target.value))}
      />
    </S.Aside>
  )
}
export default SearchContact
