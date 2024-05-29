import { usePixelContext } from '@/context/PixelContext'
import { OutputSelector } from './OutputSelector'

export const CodeView = () => {

  const { getHex, getBinaries, outputType } = usePixelContext()

  return (
    <code className='min-w-[400px] max-w-[50%] rounded bg-[#f5f2f0] p-8'>
      <h3 className='text-[#333] mb-4 font-bold'>Código C/C++</h3>
      <OutputSelector />
      <span className='text-[#216491]'>byte </span>
      <span className='text-red-500'>custom_char</span>
      <span className='text-yellow-500'>{'['}</span>
      <span className='text-green-600'>8</span>
      <span className='text-yellow-500'>{'] '}</span>=
      <span className='text-yellow-500'> {'{'} </span>
      <br />
      {
        (outputType === 'bin' ? getBinaries() : getHex()).map((binary, index) =>
          <>
            <span className='text-green-600' key={index}>{binary}</span>
            <span className='text-gray-500'>,</span>
            <br />
          </>
        )
      }
      <span className='text-yellow-500'>{'}'}</span>;
    </code>
  )
}