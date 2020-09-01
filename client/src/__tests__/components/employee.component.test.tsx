import React from 'react';
import { EmployeeComponent } from '../../components/employee.component';
import { mount, shallow } from 'enzyme';
import { ManagerComponent } from '../../components/manager.component';

jest.mock('../../remote/employee.remote')

const setUp = (props={}) => {
    const component = shallow(<EmployeeComponent {...props} />);
    return component
}


describe('EmployeeManagerComponent', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should render', () => {

        const wrapper = shallow(<EmployeeComponent />);
        console.log(wrapper.debug())
        expect(wrapper).toBeDefined();
    });

    test('should change value of amount input', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-amount')
        input.simulate('change', {target: {value: 0}});

        console.log(input.props());
        expect(input.prop('value')).toBe(0);
    });
    
    test('should change value of description input', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-description')
        input.simulate('change', {target: {value: ''}});

        console.log(input.props());
        expect(input.prop('value')).toEqual('');
    });

    test('Should call upload on change', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-file')
        input.simulate('change', {target: {value: '0'}});

        console.log(input.props());
        expect(input.prop('value')).toBeCalled();
    });

    test('Should change value of type on change', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-type')
        input.simulate('change', {target: {value: '0'}});

        console.log(input.props());
        expect(input.prop('value')).toBe(0);
    });

    test('Should call setModalandAlert on click', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-file')
        input.simulate('change', {target: {value: '0'}});

        console.log(input.props());
        expect(input.prop('value')).toBeCalled();
    });

    test('Should call addEmployee on click', () => {
        const wrapper = shallow(<EmployeeComponent />);
        const input = wrapper.find('#change-file')
        input.simulate('change', {target: {value: '0'}});

        console.log(input.props());
        expect(input.prop('value')).toBeCalled();
    });

})
})