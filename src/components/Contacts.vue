<template>
    <section
      id="contact" class="contact"
      :class="{main: menuStore.isMenuVisible}"
    >
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>{{ $t('contacts.title') }}</h2>
        </div>

        <div class="row mt-1">

          <div class="">
            <div class="info">

              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>{{ $t('contacts.location_title') }}</h4>
                <p>{{ $t('contacts.location') }}</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>{{ $t('contacts.email_title') }}</h4>
                <p>{{ $t('common.email') }}</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>{{ $t('contacts.phone_title') }}</h4>
                <p>{{ $t('common.phone_number') }}</p>
              </div>

              <div class="website">
                <i class="bi bi-bullseye"></i>
                <h4>{{ $t('contacts.website_title') }}</h4>
                <p>{{ $t('common.website') }}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore';

const menuStore = useMenuStore();
</script>

<style scoped>
.contact {
  padding-bottom: 130px;
}

.contact .info {
  margin-right: 15px;
  padding: 30px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
}

.contact .info i {
  font-size: 20px;
  color: #149ddd;
  float: left;
  width: 44px;
  height: 44px;
  background: #dff3fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #050d18;
}

.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #173b6c;
}

.contact .info .email p {
  padding-top: 5px;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .website:hover i,
.contact .info .phone:hover i {
  background: #149ddd;
  color: #fff;
}

</style>