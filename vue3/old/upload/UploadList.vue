<template>
  <ul class="list bottom:margin-5">
    <li v-for="file in files" :key="file.id" class="top:card small:left:card bottom:margin-2">
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
  name: 'UploadList',
  props: ['items', 'progress'],
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
    }
  }
}
</script>