<script>
  import { h } from 'vue'

  export default {
    name: 'CategoryList',
    props: {
      modelValue: Array,
      items: Array
    },
    emits: ['update:modelValue'],
    render() {
      return this.renderList(this.items)
    },
    data() {
      return {
        checkedCategories: []
      }
    },
    watch: {
      checkedCategories: {
        handler(newVal) {
          this.$emit('update:modelValue', newVal)
        },
        deep: true
      }
    },
    methods: {
      renderList(items) {
        let vm = this
        return h('ul', { class: 'list-unstyled' }, items.map(function(item) {
          return h('li', [
            h('div', { class: 'check' }, [
              h('input', { 
                type: 'checkbox', 
                class: 'check-input', 
                id: item.id, 
                onClick: () => vm.checkList(item.id)
              }),
              h('label', { for: item.id }, item.name)
            ]),
            (Array.isArray(item.child) == true && item.child.length >= 1) ? vm.renderList(item.child) : ''
          ])
        }))
      },
      checkList(item) {
        if(this.checkedCategories.includes(item)) {
          const removeItem = this.checkedCategories.map(word => {
            if(word != item) {
              return word
            } else {
              return 0
            }
          })
          this.checkedCategories = removeItem.filter(word => word >= 1)
        } else {
          this.checkedCategories.push(item)
        }
      }
    }
  }
</script>
