import React from 'react'
import {render} from 'enzyme'
import Loader from '..'

describe('Loader', () => {
  it('get Loader component', () => {
    const wrapper = render(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })
})
