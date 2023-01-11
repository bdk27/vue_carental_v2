import { reactive } from 'vue';
import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', () => {
    
    const getBookingData = reactive({});

   
    return {
        getBookingData,
    }
  })