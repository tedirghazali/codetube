<template>
  <div class="column:grid-7 center:grid-items">
    <div v-for="cal in calendar" :key="cal" :class="['y:margin-1', 'width-100', 'center:text', {'gray-7:text': blurDate(cal), 'none:event': disabledClickDate(cal), 'pointer:cursor': disabledClickDate(cal) === false}]" @click="eventDate(cal), $emit('leave')">
      <div :class="['padding-2', {'green': resultDate === cal}]">{{ filterDate(cal) }}</div>
    </div>
  </div>
  <div :class="['center:flex', 'y:margin-3', 'green:text', {'d:none': resultDate === ''}]">{{ resultDate }}</div>
</template>

<script>
import { defineComponent, ref, toRefs, watch } from 'vue'
import { $date as useDate } from '../assets/alga.min.js'

export default defineComponent({
  name: 'Calendar',
  props: {
    modelValue: {
      type: String
    },
    current: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    month: {
      type: Number,
      default: Number(new Date().getMonth()) + 1
    }
  },
  emits: ['update:modelValue', 'leave'],
  setup(props, context) {
    const year = ref(0)
    const month = ref(0)
    const resultDate = ref('')

    const calendar = ref([])
    const getDayNames = ref([])

    year.value = props.year
    month.value = props.month

    calendar.value = useDate.calendar(year.value, month.value)
    getDayNames.value = calendar.value.slice(0, 7)

    const filterDate = (date) => {
      let newDate = ''
      if(getDayNames.value.includes(date)) {
        newDate = date.slice(0, 3)
      } else {
        const splitDate = date.split('-')
        newDate = splitDate[2]
      }
      return newDate
    }

    const blurDate = (date) => {
      let blurText = false
      if(!getDayNames.value.includes(date) && Number(date.split('-')[1]) !== month.value) {
        blurText = true
      }
      return blurText
    }

    const disabledClickDate = (date) => {
      let disabledClick = false
      if(getDayNames.value.includes(date) || Number(date.split('-')[1]) !== month.value) {
        disabledClick = true
      }
      return disabledClick
    }

    const eventDate = (date) => {
      resultDate.value = date
      context.emit('update:modelValue', resultDate.value)
    }

    const { current, ...rest } = toRefs(props)
    watch(current, (newVal, oldVal) => {
      resultDate.value = props.current
    })

    watch(rest.month, (newVal, oldVal) => {
      month.value = props.month
      calendar.value = useDate.calendar(year.value, month.value)
    })

    watch(rest.year, (newVal, oldVal) => {
      year.value = props.year
      calendar.value = useDate.calendar(year.value, month.value)
    })

    return {
      calendar,
      filterDate,
      blurDate,
      disabledClickDate,
      eventDate,
      resultDate
    }
  }
})
</script>