import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";


describe('List', () => {
    const wrapper = mount(List)


    it('if empty displays text', () => {
        const items = wrapper.findAll('.list-item');
        if (items.length === 0) {
            expect(wrapper.text()).toEqual('Add your first Todo task')
        }
    })
});