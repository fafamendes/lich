import { useState } from 'react'
import { usePixelContext } from '@/context/PixelContext'
import { OutputSelector } from './OutputSelector'

export const CodeView = () => {
  const { getHex, getBinaries, outputType } = usePixelContext()
  const [copied, setCopied] = useState(false)
  const values = outputType === 'bin' ? getBinaries() : getHex()
  const code = `byte custom_char[8] = {\n  ${values.join(',\n  ')}\n};`
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return <section className='panel code-panel' aria-labelledby='code-title'>
    <div className='code-topbar'><h2 id='code-title' className='code-title'><span className='code-dot' aria-hidden='true' />Código C/C++</h2><OutputSelector /></div>
    <pre className='code-content' aria-label='Código C gerado'><code><span className='code-keyword'>byte</span>{' '}<span className='code-name'>custom_char</span><span className='code-punctuation'>[</span><span className='code-number'>8</span><span className='code-punctuation'>] = {'{'}</span>{'\n'}{values.map((value, index) => <span className='code-row' key={value + index}>  <span className='code-value'>{value}</span><span className='code-punctuation'>,</span>{'\n'}</span>)}<span className='code-punctuation'>{'}'};</span></code></pre>
    <button type='button' className='action-button code-copy' onClick={copyCode}>{copied ? 'Código copiado!' : 'Copiar código'}</button><p className='copy-status' aria-live='polite'>{copied ? 'O array foi copiado para a área de transferência.' : 'Pronto para colar no seu sketch Arduino.'}</p>
  </section>
}
