// /stores/counter.js
import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++;
        }
    }
});