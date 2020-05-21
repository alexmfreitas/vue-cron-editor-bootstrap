import { shallowMount } from "@vue/test-utils";
import VueCronEditorBootstrap from "../../src/components/VueCronEditorBootstrap.vue";
import Vue from "vue";

function getMountedComponent(Component: any, propsData: any) {
    return shallowMount(Component, {
        propsData
    });
}

describe("changing expression updates data", () => {
    it("when changing to expression from different tab, data is updated", async () => {
        let component = getMountedComponent(VueCronEditorBootstrap, {
            value: "*/43 * * * *"
        });
        component.setProps({ value: "0 0 * * 1,3,4" });

        await Vue.nextTick();

        expect(component.vm.$data.currentTab).toBe("weekly");
        expect(component.vm.$data.editorData).toStrictEqual({
            days: ["1", "3", "4"],
            hours: 0,
            minutes: 0,
            type: "weekly"
        });
    });
});
