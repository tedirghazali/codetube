<template>
  <div class="picker">
    <div class="select" @click="openPicker">{{ joinCategories }}</div>
    <div class="picker-box" v-show="picker">
      <InputCategory v-model:category="newCategory" v-model:checked="checkedCategories" v-model:close="picker" :datalist="allCategories" />
    </div>
  </div>
</template>

<script>
import InputCategory from './input/InputCategory.vue'

export default {
  name: 'CategoryInput',
  data() {
    return {
      allCategories: [],
      newCategory: {},
      checkedCategories: [],
      picker: false,
      rawCategories: []
    }
  },
  components: {
    InputCategory
  },
  computed: {
    joinCategories() {
      if(this.checkedCategories.length >= 1) {
        let newArr = []
        this.rawCategories.forEach(item => {
          this.checkedCategories.forEach(itemId => {
            if (item.id === itemId) {
              newArr.push(item.name)
            }
          })
        })
        return newArr.join(', ')
      } else {
        return '-- Select category --'
      }
    }
  },
  watch: {
    newCategory: {
      handler(newValue) {
        if(newValue.name != '') {
          this.setCategory(newValue.name, newValue.parent)
        }
      },
      deep: true
    }
  },
  created() {
    this.nestedCategories()
  },
  methods: {
    async getAllCategories() {
      const response = await fetch('http://localhost:3011/category')
      return response.json()
    },
    async getCategoryByParent(id) {
      const response = await fetch('http://localhost:3011/category/parent/'+id)
      return response.json()
    },
    async setCategory(nm, pr) {
      const response = await fetch('http://localhost:3011/category', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nm, parent: pr})
      })
      this.nestedCategories()
      return response.json()
    },
    nestedCategories() {
      this.getAllCategories().then(res => {
        this.allCategories = this.mergedCategories(res.data)
        this.rawCategories = res.data
      })
    },
    mergedCategories(data) {
      const Arr = []
      data.forEach(item => {
        if(Number(item.parent) === 0) {
          const Obj = {
            id: item.id,
            name: item.name
          }
          if(item.id != 0) {
            this.getCategoryByParent(item.id).then(res2 => {
              if(res2.data.length >= 1) {
                Obj.child = res2.data
              }
            })
          }
          Arr.push(Obj)
        }
        
      })
      return Arr
    },
    openPicker() {
      this.picker = true
    }
  }
}
</script>
