<script lang="ts">
    import { Card } from "../classes/Card"
    let name: string = "hogehoge"
    let arrCategory: Array<Card> = [];
    arrCategory.push(new Card("hello!!", "world!!", new Date()))
</script>
<div class="category">
    <div class="left">{name.concat("1234")}</div>
    {#each arrCategory as category}
    <div>{category.strTitle}</div>
    <div>{category.strDescription}</div>
    <div>{category.dateUpdateAt}</div>
    {/each}
</div>
<style>
    .left {
        color: lightblue;
    }
</style>