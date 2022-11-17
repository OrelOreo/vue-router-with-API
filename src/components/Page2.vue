<template>
    <div>
        <h1>Page 2</h1>
        <div v-on:click="goDebut" class="btn">Retour au début</div>
    </div>
</template>

<script>
export default {
    name:'PageDeux',
    methods: {
        goDebut: function(){
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>

    .btn {
        background-color: orange;
        display: inline-block;
        cursor: pointer;
        padding: 12px;
        border-radius: 5px;
    }

</style>