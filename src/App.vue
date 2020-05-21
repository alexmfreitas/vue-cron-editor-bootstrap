<template>
    <div id="app">
        <div class="flex-xl-nowrap">
            <main class="main-content py-3 ml-auto px-4" role="main">
                <VueCronEditorBootstrap
                    :preserveStateOnSwitchToAdvanced="true"
                    v-model="sample1CronExpression"
                ></VueCronEditorBootstrap>
                {{ sample1CronExpression }}
            </main>
        </div>
    </div>
</template>

<script>
import VueCronEditorBootstrap from "./components/VueCronEditorBootstrap.vue";

export default {
    name: "App",
    components: {
        VueCronEditorBootstrap
    },
    data: () => ({
        sample1CronExpression: "4 4 * * 0,2,3,5"
    })
};
</script>
