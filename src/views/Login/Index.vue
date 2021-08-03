<template>
  <div class="h-screen w-screen flex flex-col items-center">
    <form
      class="w-80 flex flex-col items-center pb-4 mb-2 border-b"
      @submit.prevent="handleLogin()"
    >
      <img
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
        alt=""
        class="w-[192px] h-[43px] my-20"
      />
      <h1 class="text-base font-bold form__title">Entre para continuar em:</h1>
      <h2 class="text-lg font-bold form__title mb-6">Trello</h2>

      <div class="space-y-4 w-full flex flex-col">
        <EmailInput
          v-model="registerForm.userName"
          @invalid-input="updateErrorsForm"
        />
        <PasswordInput
          v-model="registerForm.userPassword"
          @invalid-input="updateErrorsForm"
        />
        <input
          type="submit"
          value="Entrar"
          class="p-2 bg-indigo-600 text-white font-semibold rounded"
          :class="{ 'opacity-90 pointer-events-none': !isValidInputs }"
        />
      </div>
    </form>
    <router-link to="/register" class="text-indigo-500 text-sm hover:underline"
      >Criar uma conta</router-link
    >
  </div>
</template>

<script>
import EmailInput from "../../components/FormControl/EmailInput.vue";
import PasswordInput from "../../components/FormControl/PasswordInput.vue";
import StringInput from "../../components/FormControl/StringInput.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "../../plugins/axios";
export default {
  components: {
    EmailInput,
    PasswordInput,
    StringInput,
  },
  setup() {
    const registerForm = ref({
      userName: "",
      userPassword: "",
    });
    const errorsOnForm = ref({
      email: "start",
      password: "start",
    });

    const router = useRouter();

    const updateErrorsForm = ({ field, value }) =>
      (errorsOnForm.value[field] = value);

    const isValidInputs = computed(() =>
      Object.values(errorsOnForm.value).every((input) => !input)
    );

    const handleLogin = async () => {
      const payload = JSON.stringify(JSON.stringify(registerForm.value));
      console.log(payload);
      const { data } = await axios.post("/Login", `${payload}`, {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      });

      sessionStorage.setItem("trtst", JSON.stringify(data));
      router.push("/");
    };

    return {
      registerForm,
      errorsOnForm,
      isValidInputs,
      updateErrorsForm,
      handleLogin,
    };
  },
};
</script>

<style lang="postcss" scoped>
.form__title {
  color: #5e6c84;
}
</style>