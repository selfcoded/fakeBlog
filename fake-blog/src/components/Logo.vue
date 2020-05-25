<template>
    <div class="logo-container">
        <span class="around-sign left"></span><span class="around-sign right"></span>
        <div class="logo">
            <span>FAKE</span><span>BLOG</span>
        </div>
        <span class="around-sign left-bottom"></span><span class="around-sign right-bottom"></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.logo-container{
    width: 126px;
}
@media screen and (max-width: 800px){
    .logo-container{
        margin-left: 1rem;
    }
}
@media screen and (max-width: 350px){
    .logo-container{
        margin-left: .1rem;
    }
}

.around-sign{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 3px solid #007bff;


}
.left{
    border-bottom-color: transparent;
    border-right-color: transparent;
}
.right{
    border-bottom-color: transparent;
    border-left-color: transparent;
    margin-left: 5rem;
}
.left-bottom{
    border-top-color: transparent;
    border-right-color: transparent;
}
.right-bottom{
    margin-left: 5rem;
    border-top-color: transparent;
    border-left-color: transparent;
}
.logo{
    font-size: 1.2rem;
    padding: .2rem 0;
    color: white;
    font-weight: bold;
    text-align: center;
}

</style>