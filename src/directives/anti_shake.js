export default {
    bind(el, binding, vnode, oldVnode) {
        const { value, arg = 'click', modifiers } = binding
        let delay = 500, prev = 0, timer = 0, handler = value
        if (Object.toString.call(value) === '[object Function]') {
            dalay = value.delay
            handler = value.handler
        } else if (typeof value !== 'function') console.error('expected a function value for v-anti-shake, got ' + typeof value);

        el.addEventListener(arg, function (event) {
            if (modifiers.stop) event.stopPropagation();
            if (modifiers.prevent) event.preventDefault();
            const now = Date.now()
            if (now - prev < delay) clearTimeout(timer)
            timer = setTimeout(() => {
                handler(event)
            }, delay)
            prev = now
        })
    }
}