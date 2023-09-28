<script lang="ts">
  import DataTable from './payments/data-table.svelte';
  import { APPLICANTS as data } from '$lib/constants/apllicants';

  export let handleInput = (e: any) => {
    console.log(e.target.value);
  };

  const leftButton = () => {
    console.log('some other thing');
  };
</script>

<DataTable {data} {handleInput} {leftButton} />
