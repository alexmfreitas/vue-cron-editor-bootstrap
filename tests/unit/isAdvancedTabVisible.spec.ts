import { shallowMount } from "@vue/test-utils";
import VueCronEditorBootstrap from "../../src/components/VueCronEditorBootstrap.vue";

function getMountedComponent(Component: any, propsData: any) {
    return shallowMount(Component, {
        propsData
    });
}

describe("isAdvancedVisible prop", () => {
    it("renders advanced tab when isAdvancedVisible is true", () => {
        let component = getMountedComponent(VueCronEditorBootstrap, {
            isAdvancedTabVisible: true
        });
        expect(component.find(".advanced-tab").exists()).toBe(true);
    });

    it("does not render advanced tab when isAdvancedVisible is false", () => {
        let component = getMountedComponent(VueCronEditorBootstrap, {
            isAdvancedTabVisible: false
        });
        expect(component.find(".advanced-tab").exists()).toBe(false);
    });
});
