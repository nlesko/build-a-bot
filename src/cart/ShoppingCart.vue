<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currencyFilter('$') }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="sale-items">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{robot.cost | currencyFilter('$') }}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
// import currencyFilter from '../shared/currency-filter';

export default {
  name: 'Cart',
  // filters: {
  //   currencyFilter,
  // },
  computed: {
    cart() {
      return this.$store.state.robotsModule.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robotsModule/cartSaleItems'];
    },
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .sale-items{
    margin-top: 50px;
    font-size: 18px;
    color: red;
  }
</style>
