import React from 'react'
import { Table } from 'antd'

const UserTable = props => {
  const data = props.users.map(user => Object.assign(user, { key: user.id }))
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'id',
      render: (text, record) => (
        <>
          <span
            key="update"
            onClick={() => props.editRow(record)}
            style={{ marginRight: '5px' }}
          >
            编辑
          </span>
          <span key="delete" onClick={() => props.deleteUser(record.id)}>
            删除
          </span>
        </>
      )
    }
  ]
  return <Table columns={columns} dataSource={data} />
}

export default UserTable
