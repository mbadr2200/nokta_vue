import { createStore } from 'vuex'

export default createStore({
  state: {
    items:[
      // {item_name:"فولتارمين اس ار" , category_name:"أقراص" , inv_name:"مخزن الصيدلية" , expiry_date:"10-2021" , quantity:"150" , unit:"قرص"},
      // {item_name:"فلاجيل" , category_name:"محاليل" , inv_name:" أدوية القائد" , expiry_date:"10-2021" , quantity:"10" , unit:"زجاجة"},
      // {item_name:"كاتافين ٢٥" , category_name:"أقراص" , inv_name:"مخزن الصيدلية" , expiry_date:"10-2021" , quantity:"100" , unit:"قرص"}
      {item_name:"فولتارمين اس ار" , category_name:"أقراص", id: 1, category_id:1},
      {item_name:"كاتافين ٢٥" , category_name:"أقراص" , id : 2, category_id:1},
      {item_name:"فلاجيل" , category_name:"محاليل" , id:3, category_id:2}
    ],
    categories:[
      {category_name:"أقراص" , items_count : "5" , id:1},
      {category_name:"محاليل" , items_count : "2" , id:2}
    ],
    inventories:[
      {inventory_name:"ادوية القائد" , items_count : "5" , id:1},
      {inventory_name:"مخزن الصيدلية" , items_count : "2" , id:2}
    ]
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
