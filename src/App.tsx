import { ConfigProvider, theme as Theme } from 'antd'
import { useAppSelector } from './store'

import { Suspense, lazy } from 'react'
import LazyLoadWrapper from './Component/LazyLoadWrapper'

const Layout = lazy(() => import('./Layout'))

function App() {
  const { theme } = useAppSelector(state => state.display)

  return (
    <>
      <Suspense>
        <ConfigProvider
          theme={{
            algorithm: theme === 'dark' ? Theme.darkAlgorithm : Theme.defaultAlgorithm
          }}
        >
          <div className='w-screen h-screen'>
            <LazyLoadWrapper>
              <Layout/>
            </LazyLoadWrapper>
          </div>
        </ConfigProvider>
      </Suspense>
    </>
  )
}

export default App
