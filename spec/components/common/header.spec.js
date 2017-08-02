/* eslint-disable  no-undef */

import React from 'react';
import { mount } from 'enzyme';
import Header from '../../../app/components/common/header';
import { newStore } from '../../../app/store';
import helpers from '../../../app/helpers';

const store = newStore({
    config: { env: 'test' },
    router: {
        location: { pathname: '/home' }
    }
});

describe('Header', () => {
    describe('render', () => {
        it('should render without error', () => {
            const wrapper = mount(<Header store={store}/>);
            expect(wrapper.find(Header).length).toBe(1);
        });

        it('should properly display a page title', () => {
            spyOn(helpers, 'getPageTitle').and.callThrough();
            mount(<Header store={store} location="test" />);
            expect(helpers.getPageTitle).toHaveBeenCalledWith('/home');
        });
    });
});
