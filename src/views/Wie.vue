<template>
  <div class="wrapper">
    <img src="../assets/tekening.jpeg" alt="" />
    <div>
      <p>
        Kerstin en Kris Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eligendi, ullam sit quo, culpa optio a similique corrupti molestiae
        obcaecati dolorum facilis tempora minima reprehenderit distinctio
        consectetur. Accusantium eum placeat iure. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Unde magnam ea sit beatae quos distinctio
        culpa, suscipit earum veniam, ad recusandae quisquam excepturi officia
        aliquam, nemo quibusdam. Quis, eius consequuntur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        consequuntur laudantium temporibus minus distinctio ducimus similique
        accusamus reiciendis quas! Veritatis nam rerum iure labore
        exercitationem numquam modi sunt quia tempora!
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 10%;
}
img {
  min-width: 250px;
  height: 250px;
  border-radius: 50%;
}
@media only screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
