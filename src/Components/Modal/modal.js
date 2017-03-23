import LogIn from '../LogIn/index.vue';
import AddUser from '../AddUser/index.vue';
import UpdatePassword from '../UpdatePassword/index.vue';

export default {
  components: {
    'log-in': LogIn,
    'add-user': AddUser,
    'update-password': UpdatePassword
  },
  props: ['modalComp'],
  computed: {},
  methods: {}
}
