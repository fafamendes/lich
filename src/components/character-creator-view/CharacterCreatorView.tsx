import { Pixel } from './Pixel'
import { usePixelContext } from '@/context/PixelContext'

export const CharacterCreatorView = () => {
  const { togglePixel, pixels, clearPixels, isEmpty, invertPixels } = usePixelContext()
  return <section className='panel editor-panel' aria-labelledby='editor-title'>
    <div className='panel-heading'><div><p className='eyebrow'>Editor visual</p><h1 id='editor-title' className='panel-title'>Desenhe seu caractere</h1><p className='panel-description'>Clique nos pixels para montar um símbolo personalizado para o LCD.</p></div><span className='grid-size' aria-label='Grade de 5 por 8 pixels'>5 × 8</span></div>
    <div className='lcd-frame'><div className='pixel-grid' role='group' aria-label='Matriz de pixels do caractere'>{Array.from({ length: 8 }, (_, y) => Array.from({ length: 5 }, (_, x) => <Pixel key={`${x}-${y}`} x={x} y={y} active={pixels[x][y]} onClick={() => togglePixel(x, y)} />))}</div></div>
    <div className='editor-actions'><button type='button' className='action-button action-button--danger' disabled={isEmpty()} onClick={clearPixels}>Limpar matriz</button><button type='button' className='action-button' onClick={invertPixels}>Inverter pixels</button></div>
  </section>
}
