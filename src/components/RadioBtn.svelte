<script>
    export let group;
    export let value;
    export let title="";
    export let name;
</script>

<div>
<input class="cursor-pointer" id={value} type="radio" bind:group {value} {name}/>
<label  class="cursor-pointer"  for={value}>{title || value}</label>
</div>