import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('List', () => {
    const wrapper = mount(Footer);

    it("when + button is clicked", () => {
        //Span or #plus
        wrapper.find("#plus").trigger("click");
        expect(wrapper.vm.open).toBe(true)
    });
});