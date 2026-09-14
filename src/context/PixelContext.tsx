/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useContext, useState } from 'react'

export interface IPixelContext {
  pixels: boolean[][]
  setPixel: (x: number, y: number, status: boolean) => void
  togglePixel: (x: number, y: number) => void
  clearPixels: () => void
  getBinaries: () => string[]
  getHex: () => string[]
  isEmpty: () => boolean
  invertPixels: () => void
  outputType: 'bin' | 'hex'
  setOutputType: (type: 'bin' | 'hex') => void
}

const PixelContext = React.createContext<IPixelContext>({} as IPixelContext)
export const usePixelContext = () => useContext(PixelContext)

const createMatrix = () => Array.from({ length: 5 }, () => Array(8).fill(false))

export const PixelContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [outputType, setOutputType] = useState<'bin' | 'hex'>('bin')
  const [pixels, setPixels] = useState<boolean[][]>(createMatrix)
  const clearPixels = useCallback(() => setPixels(createMatrix()), [])
  const setPixel = useCallback((x: number, y: number, status: boolean) => setPixels(current => current.map((column, columnIndex) => columnIndex === x ? column.map((pixel, rowIndex) => rowIndex === y ? status : pixel) : column)), [])
  const togglePixel = useCallback((x: number, y: number) => setPixels(current => current.map((column, columnIndex) => columnIndex === x ? column.map((pixel, rowIndex) => rowIndex === y ? !pixel : pixel) : column)), [])
  const getBinaries = useCallback(() => Array.from({ length: 8 }, (_, y) => `0b${Array.from({ length: 5 }, (_, x) => pixels[x][y] ? '1' : '0').join('')}`), [pixels])
  const getHex = useCallback(() => Array.from({ length: 8 }, (_, y) => { const value = Array.from({ length: 5 }, (_, x) => pixels[x][y] ? 2 ** (4 - x) : 0).reduce((sum, bit) => sum + bit, 0); return `0x${value.toString(16).padStart(2, '0').toUpperCase()}` }), [pixels])
  const isEmpty = useCallback(() => pixels.every(column => column.every(pixel => !pixel)), [pixels])
  const invertPixels = useCallback(() => setPixels(current => current.map(column => column.map(pixel => !pixel))), [])
  return <PixelContext.Provider value={{ pixels, setPixel, togglePixel, clearPixels, getBinaries, getHex, isEmpty, invertPixels, outputType, setOutputType }}>{children}</PixelContext.Provider>
}
