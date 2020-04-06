import Vue from 'vue';

import Icon from './Icon'
import UserHeader from './UserHeader'
import { AFile, AAudio, AVideo, AImage } from './files'

const components = {
    Icon,
    UserHeader,
    AFile,
    AAudio,
    AVideo,
    AImage
}

export default {
    components,
    install() {
        for (let key in components) {
            Vue.component(key, components[key]);
        }
    }
}