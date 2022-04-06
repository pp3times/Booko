<template>
<div>
    <p>My name is : {{first_name}} {{last_name}}</p>
</div>
</template>

<script>
export default {
    name: 'Puriwat',
    props: {
        first_name : String,
        last_name : String
    }

}
</script>

<style>

</style>
