const { createApp } = Vue

  createApp({
    data() {
      return {
       discList: [],
      }
    },
    methods:{
        getDiscList() {
            axios.get('http://localhost/php-dischi-json/api/disc.php')
        .then((response) =>{
            this.discList = response.data;
            console.log(response.data);
         })
        }
    },
    created(){
        this.getDiscList();
    }

  }).mount('#app')