<script lang="ts">
  import { Checkbox } from '$lib/components/ui/checkbox';
  import { Label } from '$lib/components/ui/label';

  export let checked = false;

  $: console.log(checked);
</script>

<div class="w-full h-screen flex items-center space-x-2 justify-center">
  <Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
  <Label
    id="terms-label"
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>
