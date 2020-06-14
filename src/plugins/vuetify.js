import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        themes: {
            light: {
                primary: '#32196E',
                secondary: '#DB8416',
                accent: '#8c9eff',
                error: '#b71c1c',
            }
        }
      },
});
