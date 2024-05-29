import { ReactElement, useEffect, useState } from 'react'
import { Pixel } from './Pixel'
import { usePixelContext } from '@/context/PixelContext'

export const CharacterCreatorView = () => {

  const { togglePixel, pixels, clearPixels, isEmpty, invertPixels } = usePixelContext()
  const [pixelElements, setPixelElements] = useState<ReactElement[]>([])

  useEffect(() => {
    const elements: ReactElement[] = []

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 5; x++) {
        elements.push(<Pixel key={`${x}-${y}`}
          size={40}
          active={pixels[x][y]}
          activeColor='hsl(204.44deg 70% 92%)'
          inactiveColor='hsl(204.44deg 70% 30%)'
          onClick={() => togglePixel(x, y)}
        />
        )
      }
    }
    setPixelElements(elements)
  }, [pixels])

  return (
    <div>
      <div className='grid grid-cols-5 gap-1 bg-[#216491] p-6'>
        {pixelElements}
      </div>
      <div className='flex justify-center gap-4 mt-4'>
        <button disabled={isEmpty()} className='rounded bg-red-500 text-white p-2 disabled:bg-gray-500 '
          onClick={() => clearPixels()}>Limpar</button>
        <button className='rounded bg-blue-500 text-white p-2'
          onClick={() => invertPixels()}>Inverter</button>
      </div>
    </div>
  )
}