import React, { useState } from 'react'
import { Button } from 'antd'
const AddForm = props => {
  const initUser = { id: null, name: '', age: '' }
  const [user, setUser] = useState(initUser)

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!user.name || !user.age) return
    props.addUser(user)
    setUser(initUser)
  }
  console.log('user', user)

  return (
    <form>
      <label>姓名</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      ></input>
      <label>年龄</label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      ></input>
      <Button onClick={handleSubmit}>提交</Button>
    </form>
  )
}
export default AddForm
