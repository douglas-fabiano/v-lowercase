function install (Vue) {
  Vue.directive('lowercase', (el, _binding, vnode) => {
    let value

    if (el.tagName.toUpperCase() !== 'INPUT' && el.tagName.toUpperCase() !== 'TEXTAREA') {
      let input = el.getElementsByTagName('input')
      let textarea = el.getElementsByTagName('textarea')

      if (input.length !== 1 && textarea.length !== 1) throw new Error('v-lowercase directive requires input or textarea')
      else el = input[0] || textarea[0]

      value = vnode.componentInstance.value.toLowerCase()
    } else {
      value = vnode.elm.value.toLowerCase()
    }

    if (value && el.value !== value) {
      el.value = value

      el.dispatchEvent(new Event('input'))
    }
  })
}

export default install
