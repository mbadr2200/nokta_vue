<template>
  <div class="statisticsCard">
      
    <slot name="title"></slot>
    <slot name="count"></slot>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.statisticsCard
{
    background: white;
    padding: 30px;
    font-size: 1.7rem;
    color: var(--deep_blue_color);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    position: relative;
    margin: 10px;
    overflow: hidden;
      transition: cubic-bezier(0.17, 0.67, 0.83, 0.67) 200ms all;

}
.statisticsCard p 
{
    margin: 0px 10px;
}
.statisticsCard:hover
{
    background: var(--main_orange_color);
    color: white;
}
.statisticsCard:before
    {
      content: "\f200";
    font-family: "Font Awesome 5 Free"; 
    font-weight: 900; 
    overflow:hidden;
    font-size:110px;
    position:absolute;
    top:-20px;
    left:0;
    opacity:5%;
    transform:rotate(45deg);
    }

</style>