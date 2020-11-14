module.exports = {
    modules: ['bootstrap-vue/nuxt'],
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false, // Or `bvCSS: false`,
        bootstrapVue: {
            components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal'],
            directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
        },
    }
}