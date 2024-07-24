"use client"

import Page from 'app/page'
import Example from 'components/page/Example'
import 'styles/common.css'


const ExamplePage = () => {
  return(
    <div className='container'>
      <Page title="ExamplePage">
        <Example/>
      </Page>
    </div>
  )
}

export default ExamplePage
