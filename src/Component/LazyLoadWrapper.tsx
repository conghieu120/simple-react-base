import { Spin } from 'antd'
import { Suspense } from 'react'

export default function LazyLoadWrapper({ children }: any) {
  return (
    <Suspense
      fallback={
        <div className='w-full h-full flex items-center justify-center'>
          <Spin size='large' percent='auto'/>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
