import { MenuProps, MenuTheme, Menu as MenuAntd, Switch, theme as themeAnt } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'

import { DesktopOutlined, FileOutlined, MoonOutlined, PieChartOutlined, SunOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { changeTheme } from '../store/display.slice'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />)
]

export default function Menu() {
  const { theme } = useAppSelector(state => state.display)
  const {token: { colorBgContainer }} = themeAnt.useToken()
  const dispatch = useAppDispatch()

  return (
    <div
      style={{
        height: 'calc(100vh - 42px)',
        overflow: 'scroll',
        backgroundColor: colorBgContainer
      }}
      className='flex flex-col justify-between'
    >
      <MenuAntd
        theme={theme as MenuTheme}
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
      <div className='flex justify-center mb-4'>
        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked
          onChange={(isChecked) => dispatch(changeTheme(isChecked ? 'light' : 'dark'))}
        />
      </div>
    </div>
  )
}
