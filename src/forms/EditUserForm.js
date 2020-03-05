import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
const EditForm = props => {
  const [user, setUser] = useState(props.currentUser)
  // 复用组件
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.updateUser(user.id, user)
  }
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
export default EditForm
