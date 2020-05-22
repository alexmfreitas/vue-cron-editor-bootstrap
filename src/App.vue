<template>
    <div id="app">
        <div class="flex-xl-nowrap">
            <main class="main-content py-3 ml-auto px-4" role="main">
                <VueCronEditorBootstrap
                    :preserveStateOnSwitchToAdvanced="true"
                    v-model="sample1CronExpression"
                ></VueCronEditorBootstrap>
                <b-form-input v-model="sample1CronExpression" />
            </main>
        </div>
    </div>
</template>

<script>
import VueCronEditorBootstrap from "./VueCronEditorBootstrap.vue";
import {
    BFormInput
} from "bootstrap-vue";
export default {
    name: "App",
    components: {
        VueCronEditorBootstrap,
        BFormInput
    },
    data: () => ({
        sample1CronExpression: "4 4 * * 0,2,3,5"
    })
};
</script>
