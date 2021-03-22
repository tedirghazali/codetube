<script>
import { h } from 'vue'
import { $char, $string, $array } from '../../assets/alga.min.js'
import documentModel from '../../assets/document-model.js'

export default {
  name: 'EditorContent',
  props: {
    modelValue: Array,
    type: String,
    toggles: Array,
    wrap: String
  },
  emits: ['update:modelValue'],
  data() {
    return {
      document: [],
      ranges: {},
      flatdoc: []
    }
  },
  render() {
    return h('div', { class: 'editor-content' }, this.renderDocument())
  },
  watch: {
    toggles: {
      handler(value) {
        if(value.length >= 1 && Object.entries(this.ranges).length >= 1) {
          const flatten = $array.flatten(this.document, { children: 'content' })
          for(const [key, val] of Object.entries(this.ranges)) {
            const ind = flatten.findIndex(obj => obj.id === key)
              
            const valAttrs = val[1]
            valAttrs.attrs = {
              bold: (value.includes('b')) ? true : false,
              italic: (value.includes('i')) ? true : false,
              underline: (value.includes('u')) ? true : false,
              strikethrough: (value.includes('s')) ? true : false
            }
              
            const newObj = flatten[ind]
            newObj.content = [
              val[0], 
              valAttrs, 
              val[2]
            ]
            flatten.splice(ind, 1, newObj)
          }
          this.flatdoc = flatten
        }
      },
      deep: true
    }
  },
  updated() {
    this.$nextTick(() => {
      document.onselectionchange = () => {
        this.ranges = {}
        const selection = document.getSelection();

        for(let i = 0; i < selection.rangeCount; i++) {
          const rangeStart = selection.getRangeAt(i).startOffset
          const rangeEnd = selection.getRangeAt(i).endOffset
          const rangeId = selection.getRangeAt(i).commonAncestorContainer.parentElement.getAttribute('id')
          const rangeSplit = $string.split(selection.getRangeAt(i).commonAncestorContainer.textContent)(rangeStart, rangeEnd)
          
          const rangeArray = []
          rangeSplit.forEach(text => {
            const rangeObject = {
              id: `inline-${$char.random(11)}`,
              insert: 'span',
              content: text,
              parent: rangeId
            }
            rangeArray.push(rangeObject)
          })
          if(rangeId !== null && rangeId !== 'app') {
            this.ranges[rangeId] = rangeArray
          }
        }
      }
    })
  },
  created() {
    if(this.document.length <= 0) {
      this.getDocumentModel().then(res => {
        this.document = res
      })
      /*const newBlock = { 
        id: `block-${this.document.length + 1}-${$char.random(5)}`,
        insert: this.type,
        content: (this.type !== 'p') ? '' : []
      }
      if(this.type === 'p') {
        newBlock.content.push({
          id: `inline-${$char.random(11)}`,
          insert: 'span',
          content: ''
        })
      }
      this.document.push(newBlock)*/
      this.$emit('update:modelValue', this.document)
    }
  },
  methods: {
    renderDocument() {
      if(this.flatdoc.length >= 1) {
        this.document = $array.nested(this.flatdoc, { children: 'content' })
        this.flatdoc = []
        this.$emit('update:modelValue', this.document)
      }
      const renderArray = []
      this.document.forEach(item => {
        renderArray.push(h(item.insert, { id: item.id, class: this.typeAttributes(item.attrs), contenteditable: true, onKeyUp: this.enterNewBlock }, this.renderNodes(item.content)))
      })
      return renderArray
    },
    renderNodes(nodes) {
      let contentNode = ''
      if(typeof nodes === 'object' && Array.isArray(nodes)) {
        if(nodes.length >= 1) {
          contentNode = []
          nodes.forEach(node => {
            if(typeof node === 'object' && node !== null) {
              if(node.insert === 'span') {
                contentNode.push(h(node.insert, { id: node.id, class: this.toggleAttributes(node.attrs), onClick: this.storeTextNode }, this.subNodes(node.content)))
              } else if(node.insert === 'a') {
                contentNode.push(h(node.insert, { id: node.id, href: this.renderAttribute(node.attrs['link']), class: this.toggleAttributes(node.attrs) }, this.subNodes(node.content)))
              } else if(node.insert === 'img') {
                contentNode.push(h(node.insert, { id: node.id, src: this.renderAttribute(node.attrs['image']), alt:  this.renderAttribute(node.attrs['description']) }))
              } else if(node.insert === 'embed') {
                contentNode.push(h(node.insert, { id: node.id, src: this.renderAttribute(node.attrs['source']), type:  this.renderAttribute(node.attrs['type']), width:  this.renderAttribute(node.attrs['width']), height:  this.renderAttribute(node.attrs['height']) }))
              } else {
                contentNode.push(h(node.insert, { id: node.id }, this.subNodes(node.content)))
              }
            } else {
              contentNode.push(h('span', {}, node))
            }
          })
        }
      } else {
        contentNode = nodes
      }
      return contentNode
    },
    subNodes(nodes) {
      let content = nodes
      if(typeof nodes === 'object' && Array.isArray(nodes)) {
        content = this.renderNodes(nodes)
      }
      return content
    },
    typeAttributes(nodeAttrs) {
      return [
        { 'left:text': this.checkAttribute(nodeAttrs, 'align', 'left') },
        { 'center:text': this.checkAttribute(nodeAttrs, 'align', 'center') },
        { 'right:text': this.checkAttribute(nodeAttrs, 'align', 'right') },
        { 'justify:text': this.checkAttribute(nodeAttrs, 'align', 'justify') },
        { 'none:outline': true }
      ]
    },
    checkAttribute(node, attr, value = '') {
      let checkAttr = false
      if(value === '') {
        checkAttr = (typeof node === 'object' && attr in node) ? node[attr] : false
      } else {
        checkAttr = (typeof node === 'object' && attr in node && node[attr] === value) ? true : false
      }
      return checkAttr
    },
    toggleAttributes(nodeAttrs) {
      return [
        {'bold:text': this.checkAttribute(nodeAttrs, 'bold') },
        {'italic:text': this.checkAttribute(nodeAttrs, 'italic') },
        {'underline:text': this.checkAttribute(nodeAttrs, 'underline') },
        {'strikethrough:text': this.checkAttribute(nodeAttrs, 'strikethrough') }
      ]
    },
    renderAttribute(nodeAttr) {
      return (nodeAttr !== null) ? nodeAttr : ''
    },
    async getDocumentModel() {
      return await documentModel()
    },
    enterNewBlock(event) {
      if(event.key === 'Enter') {
        const newBlock = { 
          id: `block-${this.document.length + 1}-${$char.random(5)}`,
          insert: this.type,
          content: (this.type !== 'p') ? '' : []
        }
        if(this.type === 'p') {
          newBlock.content.push({
            id: `inline-${$char.random(11)}`,
            insert: 'span',
            content: ''
          })
        }
        const index = $array.index(this.document, { key: 'id', value: event.target.getAttribute('id') })
        this.document = $array.insert(newBlock)(this.document).after(index)
        
        setTimeout(() => {
          const blockElement = event.target.nextElementSibling
          const rangeEnter = document.createRange()
          const selectEnter = document.getSelection()
          
          if(blockElement.getAttribute('id') === this.document[index + 1].id) {
            if(blockElement.tagName === 'P') {
              rangeEnter.setStart(blockElement.children[0], 0)
            } else {
              rangeEnter.setStart(blockElement, 0)
            }
            rangeEnter.collapse(true)
            
            selectEnter.removeAllRanges()
            selectEnter.addRange(rangeEnter)
          }
        })
      }
    },
    storeTextNode(event) {
      const inlineFlatten = $array.flatten(this.document, { children: 'content' })
      const inlineIndex = $array.index(inlineFlatten, { key: 'id', value: event.target.getAttribute('id') })
      if(typeof inlineFlatten[inlineIndex].content === 'string') {
        inlineFlatten[inlineIndex].content = event.target.textContent
        this.flatdoc = inlineFlatten
      }
    }
  }
}
</script>
