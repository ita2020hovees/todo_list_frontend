import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import DoneTodoList from '../components/DoneTodoList'
import {
  deleteTodo,
  initData
} from '../actions'

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (id) => {
    dispatch({
      type: 'CHANGE_STATUS',
      id: id
    })
  },
  deleteTodo: (id) => {
    dispatch(deleteTodo(id))
  },
  initData: (data) => {
    dispatch(initData(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList, DoneTodoList)