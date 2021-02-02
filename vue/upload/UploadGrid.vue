<template>
  <ul class="column:grid-3 padding-0" ref="gridCard">
    <li v-for="file in files" :key="file.id" class="top:card margin-2" :id="formattedId(file.id)" @click="selectedFile(file)">
      <figure v-if="getFileType(file.item.type) == 'image'" class="card-figure">
        <img :src="getFileImage(file.item)" @load="loadFileImage(file.item)" :alt="file.item.name" class="card-image">
        <figcaption class="card-caption">{{ getFileSize(file.item.size) }}</figcaption>
      </figure>
      <div class="card-body">
        <h4 class="title">{{ getFileName(file.item.name) }}</h4>
        <div class="between:flex secondary:text">
          <div>Last modified: {{ getFileDate(file.item.lastModified) }}</div>
          <div>File type: {{ getFileType(file.item.type, 'format') }}</div>
        </div>
        <div class="progress top:margin-3">
          <div class="progress-bar" :style="{ width: progressBar(file.id) }">{{ progressBar(file.id) }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {
  getFileSize,
  getFileName,
  getFileType,
  getFileDate,
  getFileImage,
  loadFileImage,
  formatFileSize,
  humanFileSize
} from '../../utils.js'

export default {
  name: 'UploadGrid',
  props: ['modelValue', 'items', 'progress'],
  emits: ['update:modelValue'],
  setup() {
    return {
      getFileSize,
      getFileName,
      getFileType,
      getFileDate,
      getFileImage,
      loadFileImage,
      formatFileSize,
      humanFileSize
    }
  },
  computed: {
    files() {
      return this.items.reverse()
    },
    progressData() {
      return this.progress
    }
  },
  methods: {
    progressBar(index) {
      return this.progressData[index] + '%'
    },
    formattedId(id) {
      return 'file-card-'+id
    },
    selectedFile(file) {
      const cardList = this.$refs.gridCard.querySelector('#file-card-'+file.id).classList
      if(cardList.contains('green:border')) {
        this.$emit('update:modelValue', {})
        cardList.remove('green:border')
      } else {
        this.$emit('update:modelValue', file.item)
        cardList.add('green:border')
      }
    }
  }
}
</script>