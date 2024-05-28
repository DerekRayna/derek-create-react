// react应用入口页面
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const a: string = 1
console.log(a)

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
