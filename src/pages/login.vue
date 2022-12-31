<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold text-center">😀😆 🤪🤗</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <q-form @submit="onLogin()" :greedy="true">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <!-- User -->
                  <q-input
                    autofocus
                    bottom-slots
                    label="User"
                    v-model="store.User.UserName"
                    :rules="[val => !!val || '']">
                    <!-- :attributes="{ tabindex: '0' }" -->
                    <template v-slot:prepend>
                      <q-icon name="account_circle" />
                    </template>
                  </q-input>
                </div>
                <div class="relative">
                  <!-- Password -->
                  <q-input
                    bottom-slots
                    hint=""
                    v-model="store.User.Password"
                    label="Password"
                    :type="store.Option.ShowPassword ? 'text' : 'password'"
                    :rules="[val => !!val || '']">
                    <!-- :attributes="{ tabindex: '1' }" -->
                    <template v-slot:prepend>
                      <q-icon name="vpn_key" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="!store.Option.ShowPassword ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="store.Option.ShowPassword = !store.Option.ShowPassword" />
                    </template>
                  </q-input>
                </div>
                <div class="relative text-center">
                  <q-btn
                    color="primary"
                    :loading="store.Option.Loading"
                    icon-right="eva-log-in-outline"
                    label="Login"
                    type="submit">
                  </q-btn>
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const store = useLoginStore();
const onLogin = () => {
  store.toggleLoading();
  const lt = setTimeout(() => {
    router.push('/').then(() => {
      clearTimeout(lt);
      store.toggleLoading();
      store.$reset();
    });
  }, Math.random() * 4000);
};
</script>
