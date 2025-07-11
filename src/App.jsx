import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-around w-lvw h-lvh'>
      <h1 className='text-4xl font-bold'>tailwind-merge 실습 과제</h1>

      <div>
        <p className={twMerge('text-2xl', 'text-gray-600',
          count >= 5 && 'text-green-500',
          count >= 50 && 'text-blue-500',
          count >= 500 && 'text-purple-500',
          count <= -5 && 'text-red-500',
          count <= -50 && 'text-orange-500',
          count <= -500 && 'text-yellow-500'
        )}
        >현재 값: {count}</p>
      </div>
      <div className="flex flex-col justify-around w-[300px]">
        <div className='flex justify-around items-center'>
          <button onClick={() => setCount((prev) => prev + 1)}>
            plus 1 
          </button>
          <button onClick={() => setCount((prev) => prev + 10)}>
            plus 10
          </button>
          <button onClick={() => setCount((prev) => prev + 100)}>
            plus 100
          </button>
        </div>

        <div className='flex justify-around items-center'>
          <button onClick={() => setCount((prev) => prev - 1)}>
            minus 1
          </button>
          <button onClick={() => setCount((prev) => prev - 10)}>
            minus 10
          </button>
          <button onClick={() => setCount((prev) => prev - 100)}>
            minus 100
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
