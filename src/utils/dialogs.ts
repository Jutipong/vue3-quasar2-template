const { dialog } = useQuasar();
const router = useRouter();

export function logout() {
  dialog({
    html: true,
    title: '<div class="text-red"> Confirm</div>',
    message: 'Are you sure you want to log out?',
    cancel: true,
    persistent: true,
    ok: {
      color: 'negative',
    },
  }).onOk(() => router.push('/login'));
}
