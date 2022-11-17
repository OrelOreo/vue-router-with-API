<template>
    <div>
        <ul class="nav">
            <li class="btn"><router-link to="/" exact>Accueil</router-link></li>
            <li class="btn"><router-link to="/page1">Page 1</router-link></li>
            <li class="btn"><router-link to="/page2">Page 2</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HeaderTop'
}

</script>

<style scoped>

    .router-link-active {
        color: red;
    }

    .nav {
        display: flex;
        list-style-type: none;
    }
    
    .btn {
        margin: 5px;
        background-color: #007bff;
        border-color: #007bff;
        font-weight: 400;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        font-size: 1rem;
        padding: 0.375rem 0.75rem;
        border-radius: 5px;
    }

    .btn a {
        color: white;
        text-decoration: none;
    }

</style>