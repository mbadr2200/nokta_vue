<template>
  <h1>ربط المخازن</h1>
  <form>
    <label>الصنف</label>
    <select><option value="">اختر الصنف</option></select>
    <!-- <?php include "../includes/item_select.php"; ?> -->
    <label>المخزن</label>
    <select><option value="">اختر المخزن</option></select>
    <!-- <?php include "../includes/inventory_select.php"; ?> -->
    <label>الكمية</label>
    <input type="number" required >
    <label>تاريخ الصلاحية</label>
    <input type="date" required >
    <button class="form_btn">ربط مخزن</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
 
</style>
