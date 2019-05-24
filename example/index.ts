import Vue, { CreateElement } from 'vue' // eslint-disable-line
import Photoswipe from '../src/main'
// import PhotoswipePlugin from '../dist/Photoswipe.umd'
import Sample from './sample.vue'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        Sample, Photoswipe
    },
    render: (h: CreateElement) => h(Sample)
})
