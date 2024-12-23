<template>
	<div class="{{ pascalCase name  }}" :class="classObject">
		{{ pascalCase name  }}
	</div>
</template>

<script setup lang="ts">
import {computed} from "vue"

interface {{pascalCase name}}Props{

}

const {...} = defineProps<{{pascalCase name}}Props>();


const classObject = computed(()=>({

}))
</script>

<style lang="scss" scoped>
.{{ pascalCase name  }}{

}
</style>
