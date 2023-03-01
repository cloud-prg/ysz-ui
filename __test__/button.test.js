import {
    describe, expect, it
} from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import CButton from './packages/button/button.vue';

// describe.skip
describe('测试示例', () => {
    it('button 测试 基本内容', () => {
        const wrapper = mount(CButton, {
            slots: {
                default: 'Button'
            }
        });

        // 断言
        expect(wrapper.text()).toBe('Button')
    });

    it('传值测试', () => {
        const wrapper = shallowMount(CButton, {
            props: {
                type: 'primary'
            }
        })
        expect(wrapper.classes().map(v => v.replace('/n','')).includes('button-container')).toBe(true)
    })

    it('主题属性检测', () => {
        const wrapper = shallowMount(CButton, {
            props: {
                type: 'warning'
            }
        })
        // expect(wrapper.find('.c-button').contain('c-button-warning')).toBe(true)
        const children = wrapper.find('.c-button')
        expect((children.element.className).contain('c-button-warning')).toBe(true)
    })
});
