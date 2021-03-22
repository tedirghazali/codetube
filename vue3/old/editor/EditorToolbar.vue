<template>
  <div class="editor-toolbar">
    <ul class="nav">
      <li v-for="(tool, ind) in tools" :key="tool" class="nav-item">
        <div v-if="tool.type === 'select'">
          <select v-model="tool.action" class="select px:width-15" @change="selectType(tool.action)">
            <option v-for="option in tool.options" :key="option" :value="option.value">{{ option.text }}</option>
          </select>
        </div>
        <div v-if="tool.type === 'toggle'">
          <span v-for="(button, order) in tool.buttons">
            <button v-if="button.icon !== null" v-html="button.icon" :id="button.value" type="button" class="button" :title="button.text" @click="toggleButton(ind, button, order)"></button>
            <button v-else :id="button.value" type="button" class="button" @click="toggleButton(ind, button, order)">
              {{ button.text }}
            </button>
          </span>
        </div>
        <div v-if="tool.type === 'wrap'">
          <span v-for="(button, order) in tool.buttons">
            <button v-if="button.icon !== null" v-html="button.icon" type="button" class="button" :title="button.text" @click="wrapButton(ind, button, order)"></button>
            <button v-else type="button" class="button" @click="wrapButton(ind, button, order)">
              {{ button.text }}
            </button>
          </span>
        </div>
        <div v-if="tool.type === 'button'">
          <button v-if="tool.icon !== null" v-html="tool.icon" type="button" class="button" :title="tool.text" @click="singleButton(tool.action)"></button>
          <button v-else type="button" class="button" @click="singleButton(tool.action)">
            {{ tool.text }}
          </button>
        </div>
        <div v-if="tool.type === 'divider'" class="editor-divider"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EditorToolbar',
  props: {
    type: String,
    toggles: Array,
    wrap: String,
    viewhtml: Boolean,
    items: Array
  },
  emits: ['update:type', 'update:toggles', 'update:wrap', 'update:viewhtml'],
  data() {
    return {
      toolbar: [
        {
          type: 'select',
          options: [
            { text: 'Paragraph', value: 'p' },
            { text: 'Heading 1', value: 'h1' },
            { text: 'Heading 2', value: 'h2' },
            { text: 'Heading 3', value: 'h3' },
            { text: 'Heading 4', value: 'h4' },
            { text: 'Heading 5', value: 'h5' },
            { text: 'Heading 6', value: 'h5' },
            { text: 'Quote', value: 'blockquote' },
            { text: 'Preformatted', value: 'pre' },
            { text: 'Bullet List', value: 'ul' },
            { text: 'Number List', value: 'ol' }
          ],
          action: 'p'
        },
        {
          type: 'divider'
        },
        {
          type: 'toggle',
          buttons: [
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
                  <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                </svg>
              `,
              text: 'Bold',
              value: 'b'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
                  <path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                </svg>
              `,
              text: 'Italic',
              value: 'i'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16">
                  <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"/>
                </svg>
              `,
              text: 'Underline',
              value: 'u'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-strikethrough" viewBox="0 0 16 16">
                  <path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967z"/>
                </svg>
              `,
              text: 'Strikethrough',
              value: 's'
            }
          ],
          action: []
        },
        {
          type: 'divider'
        },
        { 
          type: 'wrap',
          buttons: [
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
              `,
              text: 'Bullet List',
              value: 'ul'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                </svg>
              `,
              text: 'Number List',
              value: 'ol'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                </svg>
              `,
              text: 'Link',
              value: 'a'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
              `,
              text: 'Insert Image',
              value: 'img'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
              `,
              text: 'Insert Media',
              value: 'embed'
            },
            {
              type: 'button',
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                </svg>
              `,
              text: 'Insert Code',
              value: 'code'
            }
          ],
          action: ''
        },
        {
          type: 'divider'
        },
        {
          type: 'button',
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
            <span class="left:margin-1">View HTML</span>
          `,
          text: 'Code View',
          action: true
        }
      ]
    }
  },
  computed: {
    tools() {
      const menus = this.toolbar
      if(this.items.length >= 1) {
       menus = this.items
      }
      return menus
    }
  },
  methods: {
    selectType(type) {
      this.$emit('update:type', type)
    },
    toggleButton(index, button, order) {
      const toggleAction = this.toolbar[index].action
      if(toggleAction.includes(button.value)) {
        document.querySelector('#'+button.value).classList.remove('primary-bottom:border', 'solid-bottom:border-2')
        const index = toggleAction.findIndex(el => el === button.value)
        toggleAction.splice(index, 1)
      } else {
        document.querySelector('#'+button.value).classList.add('primary-bottom:border', 'solid-bottom:border-2')
        toggleAction.push(button.value)
      }
      this.$emit('update:toggles', toggleAction)
    },
    wrapButton(index, button) {
      const wrapAction = this.toolbar[index].action = button.value
      this.$emit('update:wrap', wrapAction)
    },
    singleButton(action) {
      this.$emit('update:viewhtml', action)
    }
  }
}
</script>
