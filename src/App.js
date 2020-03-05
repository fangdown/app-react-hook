import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
const App = () => {
  const usersData = [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 28 },
    { id: 3, name: '王五', age: 38 },
    { id: 4, name: '小黑', age: 48 },
    { id: 5, name: '小方', age: 58 }
  ]
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [visible, setVisible] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    age: ''
  })
  const editRow = user => {
    setEditing(true)
    setVisible(true)
    setCurrentUser(user)
  }
  const updateUser = (id, updateUser) => {
    const newUsers = users.map(user => (user.id === id ? updateUser : user))
    setUsers(newUsers)
    setVisible(false)
  }
  const handleAdd = () => {
    setVisible(true)
    setEditing(false)
  }
  const addUser = user => {
    setUsers(users.concat(user))
    setVisible(false)
  }
  const deleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }
  const onCancel = () => {
    setVisible(false)
  }
  return (
    <div className="container">
      <div className="flex">
        <h2>用户列表</h2>
        <Button onClick={handleAdd}>添加用户</Button>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        <Modal
          title={editing ? '用户编辑' : '用户新增'}
          visible={visible}
          destroyOnClose={true}
          footer={null}
          onCancel={onCancel}
        >
          {editing ? (
            <EditUserForm currentUser={currentUser} updateUser={updateUser} />
          ) : (
            <AddUserForm addUser={addUser} />
          )}
        </Modal>
      </div>
    </div>
  )
}

export default App
