import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";


describe('List', () => {
    const wrapper = mount(List);
    const items = wrapper.findAll('.list-item');


    it('if empty displays text', () => {
        if (items.length === 0) {
            expect(wrapper.text()).toEqual('Add your first Todo task')
        }
    });

    it('if marked as done', () => {
        if (items.length !== 0) {
            const item = items.find(':first-of-type');
            item.find("span").trigger("click")
        }
    });
});