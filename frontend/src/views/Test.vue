<template>
  <div>
    <ThailandAutoComplete
      v-model="district"
      type="district"
      @select="select"
      label="ตำบล"
      color="#42b883"
      size="default"
      placeholder="ตำบล..."
    />

    <ThailandAutoComplete
      v-model="amphoe"
      type="amphoe"
      @select="select"
      label="อำเภอ"
      placeholder="อำเภอ..."
    />

    <ThailandAutoComplete
      v-model="province"
      type="province"
      @select="select"
      label="จังหวัด"
      size="medium"
      color="#35495e"
      placeholder="จังหวัด..."
    />

    <ThailandAutoComplete
      v-model="zipcode"
      type="zipcode"
      @select="select"
      size="large"
      color="#00a4e4"
      placeholder="รหัสไปรษณีย์..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      district: "",
      amphoe: "",
      province: "",
      zipcode: "",
    };
  },
  methods: {
    select(address) {
      this.district = address.district;
      this.amphoe = address.amphoe;
      this.province = address.province;
      this.zipcode = address.zipcode;
    },
  },
};
</script>
