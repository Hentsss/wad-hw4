import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";


describe('List', () => {
    const testData = [];
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    });

    const testData2 = [
        {id: 1,
            title: 'Foo',
            done: false
        },
        {id: 2,
            title: 'Foo2',
            done: true
        }];
    const wrapper2 = mount(List, {
        propsData: {
            list: testData2
        }
    });

    it('if empty displays text', () => {
        expect(wrapper.text()).toEqual('Add your first Todo task')
    });


    it('if marked as done', () => {
        let title = wrapper2.props().list[0].title;
        let done = wrapper2.props().list[0].done;
        wrapper2.find('.list-item:first-of-type span').trigger('click');
        for (let i = 0; i < wrapper2.props().list.length; i++) {
            if (wrapper2.props().list[i].title === title) {
                done = wrapper2.props().list[i].done;
                break;
            }
        }
        expect(done).toEqual(true);
    });

    it('unmark an item', function () {
        let title = wrapper2.props().list[0].title;
        let done = wrapper2.props().list[0].done;
        wrapper2.find('.list-item:first-of-type span').trigger('click');
        for (let i = 0; i < wrapper2.props().list.length; i++) {
            if (wrapper2.props().list[i].title === title) {
                done = wrapper2.props().list[i].done;
                break;
            }
        }
        expect(done).toEqual(false);
    });
});