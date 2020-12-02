<template>
  <div>
    <div v-if="business">
      <b-container v-if="show" class="flex-col align-items-center">
        <Header v-bind:business="business"/>
        <div class="manage" style="font-size: 2rem;" v-if="business !== undefined">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="name-group"
              label="Business Name:"
              label-for="name"
            >
              <b-form-input
                type="text"
                v-model="form.name"
                :placeholder="business.name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
              id="description-group"
              label="Description:"
              label-for="description"
            >
              <b-form-input
                type="text"
                v-model="form.description"
                :placeholder="business.description"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="address-group"
              label="Address:"
              label-for="address"
            >
              <b-form-input
                type="text"
                v-model="form.position.address"
                :placeholder="business.position.address"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="website-group"
              label="Website:"
              label-for="website"
            >
              <b-form-input
                type="url"
                v-model="form.externalURL"
                :placeholder="business.externalURL"
                ></b-form-input>
            </b-form-group>
            <b-form-group
              id="phone-group"
              label="Phone:"
              label-for="phone"
            >
              <b-form-input
                type="text"
                v-model="form.phone"
                :placeholder="business.phone"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>    
        </div> 
      </b-container>
    </div>
    <div v-else>
      Loading
    </div>  
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Manage',
  beforeCreate: function(){
    axios.get('/api/business/' + this.$route.params.id).then((res) =>{
      this.business = res.data;
    }).catch((err) => {
      console.error(err.response.data || err);
    });
  },
	data(){
		return {
      business: undefined,
      form: {
        name: undefined,
        description: undefined,
        externalURL: undefined,
        position: {
          address: undefined,
        }
      },
      show: true,
		};
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("Submitting!")
      console.log(this.form)
    },
    onReset(e) {
      e.preventDefault();
      this.form.name = undefined;
      
      // Reset the validation state.
      this.show = false;
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scoped>

.manage {
	width: 85%;
  
}

</style>
