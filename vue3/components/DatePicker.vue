<template>
  <div class="picker">
    <input type="text" v-model="date" class="input" @keyup="updateDate" @click="openPicker = true" @blur="closePicker">
    <div class="picker-menu" v-show="openPicker" @mouseover="pausePicker = true" @mouseleave="pausePicker = false">
      <div class="between:flex stretch:items padding-2">
        <div class="green:text rem:width-65 pointer:cursor" @click="controlMonth('prev')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle-fill none:event" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </div>
        <div class="evenly:flex">
          <select v-model="currentMonth" class="select right:margin-1">
            <option v-for="(mt, index) in allMonth" :key="mt" :value="index + 1">{{ mt }}</option>
          </select>
          <select v-model="currentYear" class="select left:margin-1">
            <option v-for="yr in allYear" :key="yr" :value="yr">{{ yr }}</option>
          </select>
        </div>
        <div class="green:text rem:width-65 pointer:cursor" @click="controlMonth('next')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill none:event" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </div>
      </div>
      <Calendar v-model="date" :current="currentDate" :year="currentYear" :month="currentMonth" @leave="openPicker = false" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Calendar from './Calendar.vue'
import { $date as useDate, $number as useNumber } from '../assets/alga.min.js'

export default defineComponent({
  name: 'DatePicker',
  components: {
    Calendar
  },
  setup() {
    const date = ref('')
    const currentDate = ref('')
    const allYear = ref([])
    const currentYear = ref(0)
    const allMonth = ref([])
    const currentMonth = ref(0)

    const openPicker = ref(false)
    const pausePicker = ref(true)

    const closePicker = () => {
      if(pausePicker.value === false) {
        setTimeout(() => {
          openPicker.value = false
        }, 300);
      }
    }

    const updateDate = () => {
      currentDate.value = date.value
    }

    allYear.value = useNumber.loop(1970, 2025)
    currentYear.value = new Date().getFullYear()
    allMonth.value = useDate.monthName()
    currentMonth.value = Number(new Date().getMonth()) + 1

    const controlMonth = (controlArg) => {
      let monthNum = 1
      if(controlArg === 'prev') {
        if(currentMonth.value > 1 && currentMonth.value <= 12) {
          monthNum = currentMonth.value - 1
        } else if(currentMonth.value === 1) {
          monthNum = 12
          currentYear.value = currentYear.value - 1
        }
      } else if(controlArg === 'next') {
        if(currentMonth.value >= 1 && currentMonth.value < 12) {
          monthNum = currentMonth.value + 1
        } else if(currentMonth.value === 12) {
          monthNum = 1
          currentYear.value = currentYear.value + 1
        }
      }
      currentMonth.value = monthNum
    }

    return {
      date,
      currentDate,
      allYear,
      currentYear,
      allMonth,
      currentMonth,
      openPicker,
      closePicker,
      pausePicker,
      updateDate,
      controlMonth
    }
  }
})
</script>