<template>
  <div class="card dashed:border-2" @click="modal = true">
    <figure v-if="'name' in selected && typeof selected.name === 'string'" class="card-figure">
      <img :src="file.image(selected)" @load="file.loadImage(selected)" alt="Card Image" class="card-image">
    </figure>
    <div class="card-body">
      <h4 v-if="'name' in selected && typeof selected.name === 'string'" class="card-title">{{ getFileName(selected.name) }}</h4>
      <h4 v-else class="center:text pointer:cursor">Click here to upload a thumbnail</h4>
    </div>
  </div>
  <div :class="['modal', 'fade:transition', {active: modal === true}]">
    <div class="modal-dialog small(max:width)-75">
      <div class="modal-content">
        <div class="top:margin-0">
          <ul class="tab:nav">
            <li v-for="tab in tabs" :key="tab" :class="['nav-item', {active: tabcurrent === tab} ]">
              <span class="nav-link pointer:cursor" @click="tabcurrent = tab">{{ tab }}</span>
            </li>
          </ul>
          <button type="button" class="button-close right:overlay rem:top-35 rem:right-35" @click="modal = false"></button>
        </div>
        <div class="modal-body">
          <div class="tab-content">
            <div :class="[ 'tab-panel', { active: tabcurrent === 'Dropzone'}]">
              <UploadDropzone v-model="files" />
            </div>
            <div :class="[ 'tab-panel', { active: tabcurrent === 'Grid'}]">
              <UploadGrid v-model="selected" :items="fileitems" :progress="fileprogress" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="button secondary" @click="modal = false">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { $file } from 'alga-js'
import UploadDropzone from './upload/UploadDropzone.vue'
import UploadGrid from './upload/UploadGrid.vue'

export default {
  name: 'ThumbnailUpload',
  data() {
    return {
      files: [],
      fileprogress: {},
      fileitems: [],
      tabcurrent: 'Dropzone',
      tabs: ['Dropzone', 'Grid'],
      selected: {},
      modal: false
    }
  },
  setup() {
    const file = Object.create($file)
    return {
      file
    }
  },
  components: {
    UploadDropzone,
    UploadGrid
  },
  watch: {
    files: {
      handler(newVal) {
        const fileItemLength = ((this.fileitems.length >= 1) ? this.fileitems.length : 0) + 1
        if(newVal.length >= 1) {
          newVal.forEach((item, index) => {
            const id = fileItemLength + index
            this.storeFiles(item, id).then(res => {
              const storeObj = {
                id: id,
                item: item
              }
              this.fileitems.push(storeObj)
            })
          });
        }
        this.tabcurrent = 'Grid'
      },
      deep: true
    }
  },
  methods: {
    async getAllFiles() {
      const response = await axios.get('http://localhost:3011/file')
      return response.data
    },
    async storeFiles(file, index) {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('http://localhost:3011/file', formData, {
        onUploadProgress: (progressEvent) => {
          const total = progressEvent.total
          const totalLength = progressEvent.lengthComputable ? total : null;
          if(totalLength !== null) {
            this.fileprogress[index] = Math.round((progressEvent.loaded * 100) / total)
          }
        }
      })
      return response.data
    }
  }
}
</script>
