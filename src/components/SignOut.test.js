import React from 'react';
import { shallow } from 'enzyme';
import SignOut from './SignOut';
import { setAuthedUser } from '../actions/authedUser';

describe('SignOut component', () => {
  let wrapper;
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    wrapper = shallow(<SignOut name="Test User" avatarURL="" dispatch={mockDispatch} />);
  });

  it('displays the name of the user', () => {
    expect(wrapper.find('.title-color').text()).toBe('Test User');
  });

  it('dispatches the `setAuthedUser` action when the sign out button is clicked', () => {
    wrapper.find('.button').simulate('click', { preventDefault: () => {} });
    expect(mockDispatch).toHaveBeenCalledWith(setAuthedUser(null));
  });
});
