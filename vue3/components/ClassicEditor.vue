<template>
  <!--<button type="button" class="button primary bottom:margin-3" @click="submitDocumentModel">Submit Document</button>-->
  <div class="text:editor">
    <EditorToolbar v-model:type="selectedType" v-model:toggles="selectedToggles" v-model:wrap="selectedWrap"  v-model:viewhtml="viewHTML" :items="toolbarItems" />
    <EditorContent v-model="documentModel" :type="selectedType" :toggles="selectedToggles" :wrap="selectedWrap" />
    <EditorStatusbar />
  </div>
</template>

<script>
import { $char } from 'alga-js'
import EditorToolbar from './editor/EditorToolbar.vue'
import EditorContent from './editor/EditorContent.vue'
import EditorStatusbar from './editor/EditorStatusbar.vue'

export default {
  name: 'ClassicEditor',
  data() {
    return {
      selectedType: 'p',
      selectedToggles: [],
      selectedWrap: '',
      viewHTML: false,
      toolbarItems: [],
      documentModel: []
    }
  },
  components: {
    EditorToolbar,
    EditorContent,
    EditorStatusbar
  },
  methods: {
    async storeDocumentModel() {
      if(this.documentModel.length >= 1) {
        const uniqueId = $char.random(11)
        const mysqlJSON = JSON.stringify(this.documentModel)
        const mysqlBlob = new Blob([mysqlJSON], {type: 'application/json'})
        
        const response = await fetch('http://localhost:3011/article', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ uniqueid: uniqueId, mysqlblob: mysqlBlob, mysqljson: mysqlJSON })
        })
        return response.json()
      }
    },
    submitDocumentModel() {
      this.storeDocumentModel().then(res => console.log(res.message))
    }
  }
}
</script>
