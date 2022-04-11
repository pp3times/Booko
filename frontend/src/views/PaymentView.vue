<template>
  <div class="h-screen font-ibmp bg-zinc-300">
    <Navbar />
    <div class="flex justify-center items-center h-full text-4xl">
    <div class="flex justify-start items-center flex-col bg-primary text-white h-11/12 w-2/6 p-10 ">
      <h1 class="font-bold" >ช่องทางการชำระเงิน</h1>

      <div class="m-5 text-lg">
      <h1 class="text-3xl font-semibold">ชำระเงินผ่านช่องทาง 2c2p</h1>
      <p>ท่านสามารถเลือกช่องทางการชำระเงินที่ท่านสะดวกได้หลังจากกดเลือกที่ตัวเลือก “ชำระเงินออนไลน์ทุกช่องทางผ่าน 2C2P” โดยจะมีวิธีการชำระเงินให้เลือกดังต่อไปนี้</p>
      </div>

      <div class="m-5 text-lg">
          <p>1. ช่องทางชำระผ่านบัตรเครดิต (VISA, Master Card, UnionPay และ JCB)</p>
          <p>2. ช่องทาง e-Wallet (TrueMoney Wallet, Rabbit Line Pay, WeChat Pay และ AliPay)</p>
          <p>3. ช่องทางธนาคาผ่านแอพพลิเคชั่น เว็บไซท์ธนาคาร รวมไปถึงชำระเงินที่เคาน์เตอร์ และ ตู้ ATM (SCB, BAY, KBANK, TTB, BBL, KTB และ GSB)</p>
          <p>4. ช่องทาง Qr Payment (Qr Promtpay, GrabPay, ShopeePay)</p>
      </div>

      <div class="m-5 text-lg">
          <p>หลังจากชำระเงินเสร็จเรียบร้อย ระบบจะนำกลับเข้าสู่เว็บไซต์Bookko หลังจากนั้นจะมีอีเมลแจ้งยืนยันการชำระเงินจาก 2C2P และอีเมลแจ้งรายละเอียดการสั่งซื้อจาก Bookko</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PaymentView",
  components: {
    Navbar,
  },
};
</script>

<style></style>
