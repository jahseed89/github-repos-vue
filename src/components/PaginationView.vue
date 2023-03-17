<template>
  <button class="paginagion-btn">Prev</button>
  <span v-for="(item, index) in new Array(6)" :key="index">
    <button @click="pageNumber = index + 1" class="paginagion-btn">{{ index + 1 }}</button>
  </span>
  <button class="paginagion-btn">Next</button>

  <slot name="data" :pageNumber="pageNumber" />
</template>

<script>
export default {

    props: {
        
    data() {
        return {
            pageNumber: 1
        }
    }
  },

    
};
</script>

<style>
.paginagion-btn {
  padding: 5px 10px;
  margin: 5px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
</style>
