<template>
  <div>
    <input type="search" class="input" v-model="search" @input="searchCategory" placeholder="Search category here...">
    <category-list v-model="checkedCategories" :items="categories"></category-list>
    <transition name="fade">
      <div v-show="button">
        <p>
          <label>New category</label>
          <input type="text" class="input" v-model="newCategory.name" placeholder="Add a new category">
        </p>
        <p>
          <label>Parent category</label>
          <select v-model="newCategory.parent" class="select">
            <option disabled selected>-- Select parent category --</option>
            <option v-for="cate in categories" :key="cate.id" :value="cate.id">{{ cate.name }}</option>
          </select>
        </p>
      </div>
    </transition>
    <div class="flex justify-content-between">
      <button v-if="button" class="button button-success align-self-start" @click="storeCategory">Save</button>
      <button v-else class="button button-primary align-self-start" @click="createCategory">Add new category</button>
      <button class="button button-secondary align-self-end" @click="closeCategory">Done</button>
    </div>
  </div>
</template>

<script>
  import CategoryList from './CategoryList.vue'
  
  export default {
    name: 'CategoryInput',
    props: {
      category: Object,
      checked: Array, 
      datalist: Array,
      close: Boolean
    },
    emits: ['update:category', 'update:checked', 'update:close'],
    data() {
      return {
        all: [],
        search: '',
        button: false,
        newCategory: {
          name: '',
          parent: ''
        },
        checkedCategories: []
      }
    },
    components: {
      CategoryList
    },
    computed: {
      categories() {
        if(this.search == '') {
          this.all = this.datalist
        }
        return this.all
      }
    },
    watch: {
      checkedCategories: {
        handler(newVal) {
          this.$emit('update:checked', newVal)
        },
        deep: true
      }
    },
    methods: {
      searchCategory() {
        this.all = this.datalist
        if(this.search.length >= 1) {
          this.all = this.all.filter(item => {
            return item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          })
        }
      },
      createCategory() {
        this.button = true
      },
      storeCategory() {
        this.button = false
        const categoryObj = {
          name: this.newCategory.name,
          parent: this.newCategory.parent
        }
        this.$emit('update:category', categoryObj)
        this.newCategory.name = ''
        this.newCategory.parent = ''
      },
      closeCategory() {
        this.button = false
        this.$emit('update:close', false)
      }
    }
  }
</script>
