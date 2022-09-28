<template>
    <b-tabs v-model="activeTab" @input="reset" content-class="mt-3 mb-3">
        <b-tab :value="0" :title="_$t('minutes')" class="minutes-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{ _$t("every") }}</label>
                    <b-form-input
                        type="number"
                        v-model="editorData.minuteInterval"
                        v-bind:style="{ width: '80px' }"
                    />
                    <label class="me-2 ms-2">{{ _$t("mminutes") }}</label>
                </div>
            </div>
        </b-tab>
        <b-tab :value="1" :title="_$t('hourly')" class="hourly-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{ _$t("every") }}</label>
                    <b-form-input
                        type="number"
                        v-model="editorData.hourInterval"
                        v-bind:style="{ width: '80px' }"
                    />
                    <label class="me-2 ms-2">{{
                        _$t("hoursOnMinute")
                    }}</label>
                    <b-form-input
                        type="number"
                        max="59"
                        min="0"
                        v-model="editorData.minutes"
                        v-bind:style="{ width: '80px' }"
                    />
                </div>
            </div>
        </b-tab>
        <b-tab :value="2" :title="_$t('daily')" class="daily-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{ _$t("every") }}</label>
                    <b-form-input
                        type="number"
                        v-model="editorData.dayInterval"
                        v-bind:style="{ width: '80px' }"
                    />
                    <label class="me-2 ms-2">{{
                        _$t("daysAt")
                    }}</label>
                    <b-form-timepicker
                        :value="dateTime"
                        :hour12="false"
                        @input="setDateTime"
                        style="width: auto; display: flex;"
                    />
                </div>
            </div>
        </b-tab>
        <b-tab :value="3" :title="_$t('weekly')" class="weekly-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{ _$t("every") }}</label>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-0`" type="checkbox" class="form-check-input" value="0" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-0`">{{ _$t("sun") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-1`" type="checkbox" class="form-check-input" value="1" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-1`">{{ _$t("mon") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-2`" type="checkbox" class="form-check-input" value="2" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-2`">{{ _$t("tue") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-3`" type="checkbox" class="form-check-input" value="3" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-3`">{{ _$t("wed") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-4`" type="checkbox" class="form-check-input" value="4" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-4`">{{ _$t("thu") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-5`" type="checkbox" class="form-check-input" value="5" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-5`">{{ _$t("fri") }}</label>
                    </div>
                    <div class="form-check form-switch me-2">
                        <input :id="`toggle-editor-6`" type="checkbox" class="form-check-input" value="6" v-model="editorData.days">
                        <label class="form-check-label" :for="`toggle-editor-6`">{{ _$t("sat") }}</label>
                    </div>
                    <label class="me-2">{{ _$t("at") }}</label>
                    <b-form-timepicker
                        :value="dateTime"
                        @input="setDateTime"
                        :hour12="false"
                        style="width: auto; display: flex;"
                    />
                </div>
            </div>
        </b-tab>
        <b-tab :value="4" :title="_$t('monthly')" class="monthly-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{ _$t("onThe") }}</label>
                    <b-form-input
                        type="number"
                        v-model="editorData.day"
                        v-bind:style="{ width: '80px' }"
                    />
                    <label class="me-2 ms-2">{{
                        _$t("dayOfEvery")
                    }}</label>
                    <b-form-input
                        type="number"
                        v-model="editorData.monthInterval"
                        v-bind:style="{ width: '80px' }"
                    /><label class="me-2 ms-2">{{
                        _$t("monthsAt")
                    }}</label>
                    <b-form-timepicker
                        :value="dateTime"
                        @input="setDateTime"
                        :hour12="false"
                        style="width: auto; display: flex;"
                    />
                </div>
            </div>
        </b-tab>
        <b-tab :value="4" :title="_$t('advanced')" class="advanced-tab">
            <div class="row">
                <div class="col d-flex" style="align-items: center;">
                    <label class="me-2">{{
                        _$t("cronExpression")
                    }}</label>
                    <b-form-input v-model="editorData.cronExpression" style="width:auto"/>
                    <label class="me-2 ms-2">
                        {{ explanation }}
                    </label>
                </div>
            </div>
        </b-tab>
    </b-tabs>
</template>

<script>
import vueCronEditorMixin from "./core/vueCronEditorMixin";
import {
    BTabs,
    BTab,
    BFormInput,
    BFormTimepicker,
} from "bootstrap-vue";

export default {
    name: "VueCronEditorBootstrap",
    mixins: [vueCronEditorMixin],
    components: {
        BFormInput,
        BTabs,
        BTab,
        BFormTimepicker
    },
    data: () => ({
        activeTab: null,
        tabs: [
            { id: 0, key: "minutes" },
            { id: 1, key: "hourly" },
            { id: 2, key: "daily" },
            { id: 3, key: "weekly" },
            { id: 4, key: "monthly" },
            { id: 5, key: "advanced" }
        ]
    }),
    mounted() {
        this.activeTab = this.tabs.find(t => t.key === this.currentTab).id;
    },
    watch: {
        currentTab() {
            this.activeTab = this.tabs.find(t => t.key === this.currentTab).id;
        }
    },
    computed: {
        dateTime() {
            let dateTime = `${this.editorData.hours}:${this.editorData.minutes}:00`;
            return dateTime;
        }
    },
    methods: {
        reset(e) {
            const tabKey = this.tabs.find(t => t.id === e).key;
            this._resetToTab(tabKey);
        },
        setDateTime(e) {
            if (e == null) {
                return;
            }
            const splittedTime = e.split(":");

            this.editorData.hours = splittedTime[0];
            this.editorData.minutes = splittedTime[1];
        }
    }
};
</script>
