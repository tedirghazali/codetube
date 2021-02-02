<template>
  <div class="tags-input" @click="focusInput">
    <div v-for="(tag, index) in tags" :key="index" class="tag-group">
      <span class="tag tag-primary" @dblclick="updateTag(tag, index)">{{ tag }}</span>
      <span class="tag tag-delete tag-secondary" @click="removeTag(index)"></span>
    </div>
    <input type="text" v-model="tagValue" ref="tagInput" class="tag-control" list="tag-list" :placeholder="placeHolder" @input="autoWidth($event), createTag($event)" @keyup.enter="createTag($event)">
    <datalist id="tag-list">
      <option v-for="(wt, i) in whiteTags" :key="i">{{ wt }}</option>
    </datalist>
  </div>
</template>

<script>
  export default {
    name: 'TagsInput',
    props: {
      modelValue: {
        type: String,
        required: true
      },
      datalist: Array,
      separator: String,
      whitelist: Array,
      blacklist: Array,
      placeholder: String
    },
    data() {
      return {
        tagValue: '',
        tagList: [],
        whiteList: []
      }
    },
    computed: {
      tags: {
        get() {
          return this.tagList
        },
        set(val) {
          this.tags = val
        }
      },
      whiteTags: {
        get() {
          return this.whiteList
        },
        set(val) {
          this.whiteTags = val
        }
      },
      blackList() {
        return this.blacklist || []
      },
      tagSeparator() {
        return this.separator || ','
      },
      placeHolder() {
        return this.placeholder || ''
      }
    },
    created() {
      if(this.modelValue) {
        this.tagValue = this.modelValue
      }
      if(this.datalist) {
        this.tagList: this.datalist
      }
      if(this.whitelist) {
        this.whiteList: this.whitelist
      }
    },
    methods: {
      focusInput() {
        this.$refs.tagInput.focus()
      },
      autoWidth(e) {
        const tagControlHidden = document.createElement('div')
        tagControlHidden.classList.add('tag-control', 'tag-control-hidden')

        const tagString = this.tagValue || e.target.getAttribute('placeholder') || ''
        tagControlHidden.innerHTML = tagString.replace(/ /g, '&nbsp;').trim()
        document.body.appendChild(tagControlHidden)

        e.target.style.setProperty('width', Math.ceil(window.getComputedStyle(tagControlHidden).width.replace('px', '')) + 1 + 'px')
        tagControlHidden.remove()
      },
      createTag(e) {
        if(this.tagValue.includes(this.tagSeparator) || e.key === 'Enter') {
          const filterTag = this.tagValue.replace(new RegExp(this.escapeRegex(this.tagSeparator), 'g'), '').trim()
          if(!this.tagList.includes(filterTag) && !this.blackList.includes(filterTag)) {
            this.tagList.push(filterTag)
            if(this.whiteList.includes(filterTag)) {
              this.whiteList = this.whiteList.filter(w => w !== filterTag)
            }
          }
          this.emitTag(filterTag)
          this.tagValue = ''
        }
        this.autoWidth(e)
      },
      removeTag(i) {
        this.tags.splice(i, 1)
      },
      updateTag(tag, index) {
        this.tagValue = tag
        this.removeTag(index)
      },
      escapeRegex(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      },
      emitTag(newTag = '') {
        const obj = {
          list: this.tagList,
          tag: newTag
        }
        this.$emit('update:modelValue', obj)
      }
    }
  }
</script>
