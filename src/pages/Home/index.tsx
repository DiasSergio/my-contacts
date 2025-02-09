import BottomNewTask from '../../components/BottomNewContact'
import TaskList from '../../containers/ContactList'
import SearchContact from '../../containers/SearchContact'

const Home = () => (
  <>
    <SearchContact />
    <TaskList />
    <BottomNewTask />
  </>
)

export default Home
