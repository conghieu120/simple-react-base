import { Layout } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { toggleMenu } from '../store/display.slice'
import Menu from './Menu'

const { Content, Sider } = Layout


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isMenuOpen } = useAppSelector(state => state.display)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isMenuOpen}
        onCollapse={() => dispatch(toggleMenu())}
      >
        <Menu/>
      </Sider>
      <Layout>
        <Content>
          <div>
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
