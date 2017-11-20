import React from 'react'
import App from '../src/App.js'
import stylesheet from '../src/App.scss'

export default () => <div>
  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  <App />
</div>
